<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
	import { javascript } from "@codemirror/lang-javascript";
	import Select from "../ui/Select/Select.svelte";
	import { python } from "@codemirror/lang-python";
	import Button from "../ui/Button.svelte";
	import Section from "../ui/Section.svelte";

    let writtenCode = `
		function solve(a) {
			return a > 10;
		}
	`;

	const avaliableLanguages = [
		{
			value: 'javascript',
			label: 'JavaScript'
		},
		{
			value: 'python',
			label: 'Python'
		}
	]

	interface Output {
		status: 'success' | 'error',
		output: string
	}

	let selectedLang: string = 'javascript';
	let choosenLang: any;
	let result: Output | undefined = undefined;
	let isLoading: boolean = false;

	$: {
		(selectedLang)
		switch(selectedLang) {
			case 'javascript':
				choosenLang = javascript();
			break;
			case 'python': 
				choosenLang = python();
			break;
		}
	}

	function sendCode() {
		const request = {
			language: selectedLang,
			code: writtenCode
		}

		isLoading = true;

		fetch('/api/execute', {
			method: 'POST',
			body: JSON.stringify(request),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			response.json().then(data => {
				result = data;
			});
		}).finally(() => {
			isLoading = false;
		});
	}
</script>
<Section title="Задание">
	<p>Напишите код, который выведет текст 'Hello, world'.</p>
</Section>
<Section title="Рабочее пространство">
	<div class="vertical-flex space">
		<div class="space-between space">
			<Select
				placeholder="Язык программирования"
				items="{avaliableLanguages}"
				bind:value="{selectedLang}"
			/>
			<Button
				type="primary"
				icon="play_arrow"
				label="Запустить"
				isLoading="{isLoading}"
				on:click="{sendCode}"
			/>
		</div>
		<CodeMirror
			styles={{
				'&': {
					height: '20rem'
				},
				'.cm-scroller': {
					overflow: 'inherit'
				},
				'.cm-content': {
					width: 'auto'
				}
			}}
			bind:value="{writtenCode}"
			lang="{choosenLang}"
		/>
	</div>
</Section>
<Section title="Результат">
	{#if result}
		{#if result.status === 'success'}
			{result.output ?? 'Ваш код ничего не вернул'}
		{:else}
			<span class="error">Ошибка: {result.output}</span>
		{/if}
	{:else}
		<p>Запустите код, чтобы здесь отобразился результат</p>
	{/if}
</Section>

