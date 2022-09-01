<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import { useSessionStore } from './stores/SessionStore.js'
export default {
	setup(){
        const sessionStore = useSessionStore();
        return {sessionStore}
    },
	mounted(){
		this.sessionStore.setup()
	}
};
</script>

<style>
html{
	background-color: #DCD7C9;
}
html.modal-open{
	overflow: hidden;
}
</style>
