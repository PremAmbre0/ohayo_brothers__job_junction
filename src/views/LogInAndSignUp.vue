<template>
	<div class="login-wrappper">
		<div class="login-container">
			<div class="login-image"></div>
			<div class="login-form-container">
				<div class="login-welcome-text">
					<h2 class="login-text-header">Welcome Back!</h2>
					<div class="login-text-desc">Enter your username and password to continue</div>
				</div>
				<div class="login-form">
					<v-text-field
						v-model="username"
						outlined
						label="username"
						placeholder="username"
						clearable
					></v-text-field>
					<v-text-field
						v-model="password"
						outlined
						label="password"
						placeholder="password"
						clearable
					></v-text-field>
					<div class="login-btn-container">
						<v-btn class="login-btn" block large elevation="0"> Login </v-btn>
					</div>
				</div>
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

.login-form-container {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	justify-content: center;
	align-items: center;
}

.login-form {
	width: 100%;
	padding: 2rem;
}

.login-btn-container {
	height: 2rem;
	width: 100%;
}
</style>
