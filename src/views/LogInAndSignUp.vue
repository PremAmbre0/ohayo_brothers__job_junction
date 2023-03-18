<template>
	<div class="login-wrappper">
		<div class="login-container">
			<div class="login-image"></div>
			<div class="login-form">
				<v-text-field v-model="username" solo label="username" clearable></v-text-field>
				<v-text-field v-model="password" solo label="password" clearable></v-text-field>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "loginAndSignup",
	data: () => ({
		username: "",
		password: "",
	}),
}
</script>

<style lang="scss" scoped>
.login-wrappper {
	height: 100vh;
	width: 100vw;
}
.login-container {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

.login-form {
	height: 100%;
	width: 100%;
}
</style>
