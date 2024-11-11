import { writable, type Writable } from 'svelte/store'

interface Toast {
	id: number
	message?: string
	type: string
	dismissible: boolean
	timeout: number
}

export const toasts = writable([]) as Writable<Toast[]>

export const addToast = (toast: Toast) => {
	const defaults: Toast = {
		id: toast.id,
		type: 'success',
		dismissible: true,
		timeout: 3000
	}

	toasts.update((all) => [{ ...defaults, ...toast }, ...all])

	if (toast.timeout) setTimeout(() => dismissToast(toast.id), toast.timeout)
}

export const dismissToast = (id: number) => {
	toasts.update((all) => all.filter((t) => t.id !== id))
}
