<script lang="ts">
	import { enhance } from '$app/forms';
	import { Textarea, Input, Label, Helper, Button } from 'flowbite-svelte';
	export let data;
	const { article } = data;
</script>

<form method="POST" action="?/updateArticle">
	<div>
		<Label for="title" class="mb-2">Title</Label>
		<Input type="text" name="title" value={article.title} required />
	</div>
	<div>
		<Label for="content" class="mb-2">Content</Label>
		<Textarea class="h-48" name="content" value={article.content} required />
		<input name="id" type="hidden" value={article.id} />
	</div>
	<div>
		<Button type="submit">Submit</Button>
	</div>
</form>
