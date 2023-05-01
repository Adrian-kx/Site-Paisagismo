<template lang="">
    <Footer>
        <div class="info_geral">
            <div class="logo_footer no_responsive">
                <h2>Logo</h2>
            </div>
            <hr class="no_responsive">
            <div>
                <h3 id="contatos">Contatos</h3>
                <br>
                <div class="social_media">
                    <p><a target="_blank"  href=""><img src="../icons/intern_icons/instagram.svg" alt="">@InstadaEmpresa</a>
                    </p>
                    <p><a target="_blank"  href=""><img src="../icons/intern_icons/facebook.svg" alt="">Facebook da empresa</a>
                    </p>
                    <p><a target="_blank"  href="#"><img src="../icons/intern_icons/phone.svg" alt="">(48) 9 0000-0000</a></p>
                    <p><a target="_blank"  href="#"><img src="../icons/intern_icons/phone-call.svg" alt="">(48) 0000-0000</a></p>
                </div>
            </div>
            <hr>
            <div>
                <h3>Localização</h3>
                <br>
                <p>Cidade - UF - Brasil</p>
                <p>Bairro da Cidade</p>
                <p>Rua: Centro, 000</p>
                <p>CEP 00000-000</p>
            </div>
        </div>
        <div class="by">
            <p>
                Direitos Reservados 2023 © Empresa 
            </p>
            <hr class="no_responsive">
            <p>
                <a target="_blank" href="https://www.linkedin.com/in/adrian-xavier-85ab81201/">Site desenvolvido Por: Adrian Kauã Xavier</a>
            </p>

        </div>
    </Footer>
</template>
<script>
export default {
    
}
</script>
<style>
    footer{
        height: 330px;
        background-color: rgba(0, 0, 0, 0.779);
        display: flex;
        flex-direction: column;
        color: white;
        justify-content: space-between; 
        margin-bottom: 0;
        padding: 50px 0px 0px ;
        border-radius: 100px 100px 0px 0px;
        box-shadow: 1px 1px 20px 8px  rgb(0, 0, 0);
    }
    .info_geral{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        align-items: center;
        color: white;
    }
    .info_geral hr{
        height: 100%;
        border: 1px rgba(161, 155, 155, 0.195) solid;
    }
    footer a,
    footer ul,
    footer li {
        text-decoration: none;
        list-style: none;

}
.social_media{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
}
footer h3{
    display: flex;
    justify-content: center;

}
.social_media a{
display: flex;
justify-content: center;
align-items: center;
color: white;
margin: 3px;

}

footer .social_media img{
    color: white;
    margin-right: 10px;
    background-color: white;
    border-radius: 15px;
    padding: 6px;
}
footer .by{
    color:white;
    display:flex;
    justify-content: space-around;
    background-color: black;
    padding: 20px;
}
footer .by a{
    color: white;
}
.logo_footer h2{
    width: 200px;
    font-size: 100px;
}
.by hr{
    height: 100%;
        border: 1px rgb(255, 255, 255) solid;
}
@media (max-width: 950px){
    footer{
        border-radius: 50px;
    }
    .no_responsive{
        display: none;
    }
    footer .by{
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>