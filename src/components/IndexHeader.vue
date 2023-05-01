<template lang="">
  <Header>
    <a class="logo_link" href="#">
      <!-- <img class="logo_image" src="../assets/logo.jpg" alt="logo"> -->
      <h2 class="logo_image">LOGO</h2>
    </a>
    <ul class="header_link">
      <li><a class="link_iten" href="home">Home</a></li>
      <li><a class="link_iten" href="#sobre">Sobre</a></li>
      <li><a class="link_iten" href="trabalhos">Trabalhos</a></li>
      <li><a class="link_iten" href="#depoimentos">Depoimentos</a></li>
      <li><a class="link_iten" href="contato">Contato</a></li>
    </ul>
  </Header>
</template>
<script>
export default {

}
</script>
<style>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  box-shadow: 1px 1px 5px 2px rgb(0, 0, 0);
  padding: 10px 80px;
}

.logo_link {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.4);

  align-items: center;
  text-decoration: none;
  text-align: center;
}

.logo_link:hover {
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.4);
}

.logo_image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  color: black;
  align-items: center;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;


}

.header_link {
  list-style: none;
  font-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.link_iten {
    font-size: 19px;
    width: 100%;
    height: 100%;
    position: relative;
    color: rgba(0, 0, 0, 0.779);
    font-style: none;
    list-style: none;
    text-decoration: none;
    margin: 20px;
    font-size: 20px;
}

.link_iten::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 4px;
    background-color: #18272F;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .3s ease-in-out;
}

.link_iten:hover::before {
    transform-origin: left;
    transform: scaleX(1);
}
@media (max-width: 950px)
{
  header{
    justify-content: center;
  }
  .header_link{
    display: none;
  }
}
</style>