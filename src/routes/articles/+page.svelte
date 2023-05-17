<script lang="ts">
	import { enhance } from '$app/forms';
	import { Textarea, Input, Label, Button } from 'flowbite-svelte';
	export let data;
	const { articles } = data;
</script>

<div class=" text-2xl text-slate-100 font-medium">Articles</div>
<div class="mb-10">
	<ul>
		{#each articles as article}
			<form action="?/deleteArticle&id={article.id}" method="POST">
				<li>
					{article.title}: {article.content} <a href="/articles/{article.id}">Edit</a>
					<button type="submit">Delete</button>
				</li>
			</form>
		{/each}
	</ul>
</div>
<form method="POST" action="?/createArticle">
	<div>
		<Label for="title" class="mb-2">Title</Label>
		<Input type="text" name="title" placeholder="enter a title" required />
	</div>
	<div>
		<Label for="content" class="mb-2">Content</Label>
		<Textarea class="h-48" name="content" placeholder="Write your Article" required />
	</div>
	<div>
		<Button type="submit">Submit</Button>
	</div>
</form>
