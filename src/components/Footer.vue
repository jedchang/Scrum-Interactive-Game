<template>
  <footer class="footer">
    <div class="container">
      <div class="col-12">
        <div class="content">
          <div class="copyright-text">
            © 2022 All rights reserved. Design & Code with
            <font-awesome-icon icon="fa-solid fa-heart" />
            by
            <a
              href="https://github.com/jedchang"
              target="_blank"
            >Jed Chang</a>
          </div>
          <ul class="social-icon">
            <li>
              <a
                href="https://codepen.io/jedchang"
                target="_blank"
                class="btn-social"
              >
                <font-awesome-icon icon="fa-brands fa-codepen" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jedchang"
                target="_blank"
                class="btn-social"
              >
                <font-awesome-icon icon="fa-brands fa-github" />
              </a>
            </li>
            <li>
              <a
                href="https://gitlab.com/jedchang"
                target="_blank"
                class="btn-social"
              >
                <font-awesome-icon icon="fa-brands fa-gitlab" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/_footer.scss';
</style>
