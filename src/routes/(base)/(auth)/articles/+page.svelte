<script lang="ts">
	import Card from '$lib/Card.svelte';
	import { Textarea, Input, Label, Button } from 'flowbite-svelte';
	export let data;
	const { articles } = data;
</script>

<Card title="Articles" className="space-x-4 space-y-4">
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
</Card>
<Card title="Article Entry" className="space-x-4 space-y-4">
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
</Card>
