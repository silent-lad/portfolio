<template>
  <div id="heroSection">
    <div class="description">
      <p id="heroText">
        Hi, I am
        <br />
        <span class="realName">Divyansh Tripathi</span>
        <br />
        <span class="name">Silentlad</span>
      </p>
      <div class="imgWrapper">
        <img
          id="heroImage"
          src="../../assets/img/heroLogo.png"
          alt="silentlad"
        />
        <Tilt class="tiltEffect" />
      </div>
    </div>
    <!-- <div class="scroll-downs">
      <div class="mousey">
        <div class="scroller"></div>
      </div>
    </div> -->
  </div>
</template>

<script>
import VanillaTilt from "vanilla-tilt";
import Tilt from "./Tilt";

export default {
  name: "HeroSection",
  data() {
    return {};
  },
  components: {
    Tilt
  },
  mounted() {}
};
</script>

<style lang="scss">
#heroSection {
  // height: 100%;
  width: 100vw;
  .description {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3% 5%;
    padding-bottom: 0;
    @media screen and (max-width: 1000px) {
      padding: 0;
    }
    .imgWrapper {
      height: 90vh;
      img {
        height: 100%;
      }
      .tiltEffect {
        // margin-left: vw;
        padding: 0 5vw;
        display: block;
        @media screen and (max-width: 1000px) {
          display: none;
        }
      }
      #heroImage {
        display: none;
        @media screen and (max-width: 1000px) {
          display: block;
        }
      }

      @media screen and (max-width: 1000px) {
        position: absolute;
        height: 10vh;
        top: 20px;

        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
    #heroText {
      // margin-left: 20vh;
      // text-align: right;
      @media screen and (max-width: 1000px) {
        padding: 5%;
        font-size: 45px;
        margin-top: 15vh;

        .blogs {
          color: rgb(177, 38, 3);
        }
        .projects {
          color: rgb(52, 100, 255);
        }
        .contact {
          color: rgb(0, 179, 211);
        }
      }
      .realName {
        text-decoration: line-through;
      }
      .name {
        // filter: drop-shadow(0 0 10px rgba(4, 117, 229, 0.6));
        filter: drop-shadow(0 0 10px #e52027bb);
        font-size: 120px;
        // color: rgb(4, 117, 229);
        // color: #e52027;
        background: -webkit-linear-gradient(
          rgb(219, 20, 20),
          rgb(219, 20, 20),
          rgb(2, 1, 1)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-style: normal;
        font-weight: 700;
        // filter: drop-shadow(7px 7px 5px rgba(255, 255, 255, 0.733));
      }
      color: #efefef;
      font-size: 60px;
      font-family: "Josefin Sans", sans-serif;
      font-style: italic;
      font-weight: 200;
      line-height: 1.3;
      a {
        text-decoration: none;
        color: white;
        transition: all 0.3s;
      }
      .blogs {
        color: rgb(177, 38, 3);
      }
      .projects {
        color: rgb(52, 100, 255);
      }
      .contact {
        color: rgb(0, 179, 211);
      }
      .blogs:hover {
        background: rgb(17, 17, 17);
      }
      .projects:hover {
        background: rgb(17, 17, 17);
      }
      .contact:hover {
        background: rgb(17, 17, 17);
      }
    }
  }
}

.scroll-downs {
  position: absolute;
  right: 0;
  bottom: 13px;
  left: 0;
  margin: auto;
  width: 24px;
  height: 45px;
}
.mousey {
  width: 3px;
  padding: 10px 12px;
  height: 25px;
  border: 2px solid rgba(255, 255, 255, 0.452);
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: rgba(255, 255, 255, 0.555);
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% {
    opacity: 0;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}
</style>
