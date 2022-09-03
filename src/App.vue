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
.blog-article-container{
	max-width: 100vw;
}
#Home{
	max-width: 100vw;
}
#BlogHome{
	max-width: 100vw;
}
</style>
