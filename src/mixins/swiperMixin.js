import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
  data () {
    return {
      modules: [Pagination, Navigation]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
