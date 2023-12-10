<template>
    <footer>
        <div class="main-footer-div">
            <div>
                <p> Copyright Games News 2023</p><br>
                <a href="#posts"> Ir al principio</a>
            </div>

            <section>
                <a href=""> Instagram</a>
                <a href=""> Facebook </a>
                <a href=""> Gmail</a>
            </section>
        </div>
    </footer>
</template>
<style>
    
footer {
    padding: 3rem;
    color: aliceblue;
    background-color: black;
}

.main-footer-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
footer section{
    
    padding:0;
    gap: 0.5em;
    background-color: #000000;
    width: auto;
    align-items: none;
    min-height: 3em;
}
footer a {
    transition: color 0.4s ease;
    color: blueviolet;
    text-decoration: none;
}

footer a:hover {
    color: blanchedalmond;
}

</style>