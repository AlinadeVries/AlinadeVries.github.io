<template>
    <header>
        <RouterLink to="/"><img src="/icons/Logo_A_v2.svg" alt="Logo"></RouterLink> 
        <RouterLink to="/"><p>adevries.dev</p></RouterLink>
    </header>
</template>

<style scoped>
img {
    height: 50px;
}

header {
    display: flex;
    gap: 25px;
    padding: 20px;
    align-items: center;
}

p {
    font-size: 24px;
}

header a {
    text-decoration: none;
    color: #1c1c1c;
}
</style>