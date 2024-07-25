Vue.component('faq_accordion_1721919221', {
  template: `
    <div>
      <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
        <div class="space-y-3 text-center">
          <h1 class="text-4xl text-gray-800 font-semibold pt-10">All About Our Book Store</h1>
          <p class="text-gray-600 max-w-lg mx-auto text-lg">Get answers to your questions about buying books online</p>
        </div>
        <div class="mt-14 max-w-2xl mx-auto">
          <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
            <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
              { item.q }
              <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </h4>
            <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
              <div class="px-4 py-6">
                <p class="text-gray-700 pb-4 max-w-full text-lg">{ item.a }</p>
              </div>
            </div>
            <br/><br/>
          </div>
        </div>
      </section>
    </div>
  `,
  delimiters: ['{', '}'],
  data() {
    return {
      selectedFaq: null,
      faqs: [
        {
          q: "What types of books can I buy?",
          a: "Our online bookstore offers a vast selection of books across various genres including fiction, non-fiction, classics, biographies, self-help, children's books, and more. We strive to have something for every reader."
        },
        {
          q: "How do I place an order?",
          a: "Placing an order is easy! Simply browse our collection, add the books you want to your cart, proceed to checkout, and complete the payment process. You can also create an account for faster checkout on future orders."
        },
        {
          q: "Do you offer free shipping?",
          a: "Yes, we offer free standard shipping on orders over a certain amount (which may vary depending on your location). Expedited shipping options are also available at an additional cost."
        },
        {
          q: "How long does delivery take?",
          a: "Delivery times can vary based on your location and the shipping method you choose. Standard shipping typically takes 5-10 business days, while expedited options are faster but more expensive."
        },
        {
          q: "Can I return or exchange books?",
          a: "Absolutely, we have a hassle-free return and exchange policy. If you're not satisfied with your purchase for any reason, you can return it within a specified number of days for a full refund or exchange."
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
});