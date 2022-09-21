<template>
  <div class="h-100 d-flex align-items-center justify-content-center p-5">
    <div class="shadow-sm col-10 h-100 row mx-0 rounded bg-white">
      <div class="col-3 border-end pb-4 px-0">
        <button
          class="btn d-flex rounded-0 w-100 text-start mx-0 align-items-center px-3 border-bottom py-2"
        >
          <div class="col-3 p-2">
            <div class="photo bg-light border"></div>
          </div>

          <div class="col py-2 px-0">
            <h5 class="m-0">Carla Marques</h5>

            <p class="mt-1 mb-0 text-secondary small">
              hahaha, pior que é verdade!
            </p>
          </div>
        </button>

        <button
          class="btn d-flex rounded-0 w-100 text-start mx-0 align-items-center px-3 border-bottom py-2"
        >
          <div class="col-3 p-2">
            <div class="photo bg-light border"></div>
          </div>

          <div class="col py-2 px-0">
            <h5 class="m-0">Ivy Marques Rodrigues</h5>

            <p class="mt-1 mb-0 text-secondary small">
              Boa noite! Até amanhã...
            </p>
          </div>
        </button>
      </div>

      <div class="col p-0 row mx-0">
        <div class="col-12 p-5 chat">
          <div
            class="col-6 mydate-bg-me text-white shadow-sm border-0 rounded px-3 py-4 h6 mb-0"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>

          <div class="col-6 small text-secondary p-1">20/09/2022 às 22:38</div>

          <div
            class="col-6 ms-auto rounded px-3 py-4 bg-light text-secondary shadow-sm h6 mb-0 mt-3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>

          <div class="col-6 small ms-auto text-secondary p-1">
            20/09/2022 às 22:38
          </div>

          <div
            class="col-6 ms-auto rounded px-3 py-4 bg-light text-secondary shadow-sm h6 mb-0 mt-3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>

          <div class="col-6 small ms-auto text-secondary p-1">
            20/09/2022 às 22:38
          </div>
        </div>

        <div class="col-12 d-flex border-top p-0 inbox">
          <input
            name=""
            id=""
            class="form-control rounded-0 border-0 h-100 px-4 py-0 text-secondary"
            placeholder="Digite uma mensagem..."
          />

          <div
            class="col-1 d-flex align-items-center justify-content-end p-2 pe-3"
          >
            <img src="@/assets/icons/emote.png" alt="" />

            <img src="@/assets/icons/send.png" alt="" class="ms-3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/colors.scss";

.photo {
  width: 60px;
  height: 60px;
  border-radius: 30px;
}

.chat {
  height: 92%;
}

.inbox {
  height: 8%;
}

.mydate-bg-me {
  background-color: $second-color;
}
</style>
