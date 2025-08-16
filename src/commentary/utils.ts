const audioCache = new Map<string, HTMLAudioElement>()

export function createCancelableSpeaker() {
	let currentAbortController: AbortController | null = null

	async function speakFiles(paths: string[], volume = 0.5) {
		if (currentAbortController) currentAbortController.abort()
		const controller = new AbortController()
		currentAbortController = controller

		for (const path of paths) {
			if (controller.signal.aborted) break

			// Load or get cached audio
			let audio = audioCache.get(path)
			if (!audio) {
				audio = new Audio(path)
				audioCache.set(path, audio)
				try {
					await audio.play() // preload
					audio.pause()
					audio.currentTime = 0
				} catch {
					// ignore preload errors
				}
			}

			if (controller.signal.aborted) break

			// Apply volume before playing
			audio.volume = volume

			// Play audio sequentially
			await new Promise<void>((resolve, reject) => {
				const onEnded = () => cleanup(resolve)
				const onAbort = () => cleanup(() => reject(new Error('aborted')))
				const cleanup = (callback: () => void) => {
					audio.removeEventListener('ended', onEnded)
					controller.signal.removeEventListener('abort', onAbort)
					callback()
				}

				audio.addEventListener('ended', onEnded)
				controller.signal.addEventListener('abort', onAbort)
				audio.currentTime = 0
				audio.play()
			})
		}
	}

	return {speakFiles, cancel: () => currentAbortController?.abort()}
}
