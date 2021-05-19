<template>
  <div class="FAQ">
    <section id="text-head">
      <p class="faq-header-lvl1">часто задаваемые вопросы</p>
    </section>
    <section id="text-body">
      <p class="faq-header-lvl2"><a href="#">политика сервиса</a></p>
      <p class="faq-text">Integer iaculis tempor urna eu sagittis. Nunc ullamcorper venenatis justo, vel congue nunc feugiat ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ut risus non magna feugiat auctor quis consequat quam. Phasellus sit amet sem est. Praesent dapibus ornare ultrices. Quisque vitae feugiat orci. Mauris ullamcorper ullamcorper nunc a imperdiet. Mauris iaculis gravida lorem, quis elementum sem consectetur ac. Suspendisse dictum dapibus enim sit amet molestie. Maecenas rhoncus posuere nisi, eu auctor massa hendrerit in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus imperdiet faucibus quam vel pulvinar. Fusce magna leo, auctor at vestibulum ac, dictum sed dolor. Aliquam tristique vulputate egestas. Duis est quam, tincidunt et maximus id, feugiat ut elit. Phasellus convallis velit ut felis vestibulum, nec finibus dui tempor. Nulla consectetur, ligula quis tempus accumsan, lacus libero interdum mi, cursus sagittis dolor mi a dolor. Ut eu odio consectetur, auctor turpis ut, interdum ante. Curabitur scelerisque fringilla dui, eget vulputate magna lobortis convallis. Nullam euismod placerat tellus nec dictum. Phasellus commodo justo et placerat cursus. Integer vel pharetra leo, condimentum mollis turpis. Phasellus gravida feugiat libero, vel dictum nisl maximus at. Suspendisse tristique, sem blandit luctus dignissim, neque magna mollis elit, nec congue sapien eros sit amet ipsum. Maecenas lobortis quis nunc et tincidunt. Donec vitae maximus arcu. Vestibulum ultricies nunc eu dui lobortis malesuada. </p>
      <p class="faq-text">Nunc convallis nulla quis dapibus congue. Etiam risus sem, condimentum in risus sit amet, ultricies mattis est. Sed justo augue, pellentesque ac purus at, ullamcorper accumsan mauris. In tempor vulputate posuere. Sed ut hendrerit massa. Suspendisse potenti. Vestibulum at tortor in mauris tincidunt fermentum. Ut mi felis, egestas vel dictum id, consequat vulputate nunc. Fusce gravida lorem vel justo consequat, non laoreet risus maximus. Cras sem sapien, venenatis eu tempus suscipit, auctor a velit. Integer viverra, risus at interdum porttitor, quam magna ultrices lorem, tristique pulvinar massa sem pharetra neque. Vivamus vehicula velit ac diam congue luctus.</p>
      <p class="faq-header-lvl2"><a href="#">правила использования</a></p>
      <p class="faq-text">Nam pretium magna eu mauris semper blandit. Aenean molestie libero dui, vel cursus leo porta et. Vivamus et hendrerit justo. Integer mattis dignissim tortor ac malesuada. Nam elit orci, venenatis in odio vel, aliquam sagittis lorem. Quisque ultricies varius porta. Etiam tristique sit amet velit auctor placerat. Nulla eu tristique metus, non blandit ante. Phasellus eget maximus sapien. Nullam non malesuada sem, id commodo nisl. Ut sed volutpat diam. Sed egestas lorem metus. Quisque tempus nunc metus, eget dictum sem facilisis sit amet. Quisque vehicula lacinia fermentum.</p>
      <p class="faq-text">Aliquam erat volutpat. Quisque ac enim diam. Maecenas eu venenatis metus, id tempor augue. Proin tincidunt elit id dolor pellentesque, eu rutrum erat congue. In hac habitasse platea dictumst. Morbi ut ligula ut mi consectetur vulputate. Integer rutrum lectus erat, nec laoreet turpis rutrum at. Vestibulum mollis lectus magna, in elementum turpis rutrum eget. Curabitur a efficitur leo. Mauris at libero a leo laoreet gravida eleifend nec metus. Nunc at scelerisque diam.</p>
      <p class="faq-header-lvl2"><a href="#">пользовательское соглашение</a></p>
      <p class="faq-text">Quisque faucibus euismod nunc. Aliquam luctus elit sit amet tortor fringilla, a fringilla orci bibendum. Maecenas feugiat justo sed odio laoreet tincidunt. Aliquam erat volutpat. Aliquam non nunc libero. Donec molestie lacinia augue ac maximus. Nam viverra, arcu quis pharetra finibus, nisi enim elementum risus, quis aliquet odio nisi nec elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque at placerat arcu. In at dui quis metus tempor tincidunt semper venenatis augue. Aenean feugiat vitae ante eu eleifend. Fusce mollis sodales urna. Morbi id egestas eros, a vestibulum odio. Vestibulum commodo dolor at quam euismod pharetra.</p>
      <p class="faq-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis arcu nec feugiat ultrices. Morbi nec metus mauris. Ut eget eleifend metus, sit amet pellentesque metus. Maecenas a risus tempus, scelerisque tortor non, ornare lorem. Nullam ut felis scelerisque, pulvinar neque in, maximus tortor. Aliquam velit orci, mollis non ultrices non, eleifend non mauris. Nam vitae tortor mollis, tempus ipsum id, ullamcorper odio. Suspendisse ac posuere risus, in lobortis sem. Cras ex nibh, aliquam in sodales nec, vulputate id arcu. Donec mattis pharetra mollis. Vivamus id nibh pretium, euismod mi a, pretium tortor. Vestibulum porttitor ultrices diam, quis placerat magna ullamcorper ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla lobortis tortor id consequat scelerisque.</p>
    </section>
  </div>
</template>

<script>

export default {
  name: "faq-component",

}
</script>

<style scoped>
.FAQ {
  @apply lg:container mx-auto mt-10
}
@layer components {
  .faq-header-lvl1 {
    @apply font-yeseva text-8xl text-black
    my-1
  }
  .faq-header-lvl2 {
    @apply font-yeseva text-4xl text-black
    my-1
  }
  .faq-text {
    @apply font-roboto font-light text-xl
    my-1
  }
}
</style>