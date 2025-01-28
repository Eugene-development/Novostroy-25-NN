<script>
	import { DropdownMenu } from 'bits-ui';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class="focus-visible border-border-input bg-background-alt shadow-btn active:scale-98 inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
	></DropdownMenu.Trigger>
	<DropdownMenu.Content
		class="w-full max-w-[229px] rounded-xl border border-muted bg-background px-1 py-1.5 shadow-popover"
		sideOffset={8}
	>
		<DropdownMenu.Item
			class="rounded-button flex h-10 select-none items-center py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted"
		>
			<div class="flex items-center">Profile</div>
		</DropdownMenu.Item>

		<DropdownMenu.Separator class="my-1 -ml-1 -mr-1 block h-px bg-muted" />

		<DropdownMenu.Sub>
			<DropdownMenu.SubTrigger
				class="rounded-button flex h-10 select-none items-center py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted data-[state=open]:bg-muted"
			>
				<div class="flex items-center">Invite users</div>
				<div class="ml-auto flex items-center gap-px"></div>
			</DropdownMenu.SubTrigger>
			<DropdownMenu.SubContent
				class="w-full max-w-[209px] rounded-xl border border-muted bg-background px-1 py-1.5 shadow-popover !ring-0 !ring-transparent"
				sideOffset={10}
			>
				<DropdownMenu.Item
					class="rounded-button flex h-10 select-none items-center py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-muted"
				>
					@huntabyte
				</DropdownMenu.Item>
			</DropdownMenu.SubContent>
		</DropdownMenu.Sub>
	</DropdownMenu.Content>
</DropdownMenu.Root>
