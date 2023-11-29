"use client"

import useToast from "@/hooks/useToast"

export default function Testing() {
	const toast = useToast();
	toast("hellooooo")
	return <h1>asdasd</h1>
}