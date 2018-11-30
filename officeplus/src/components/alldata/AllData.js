//import noImage from "../../assets/images/noimage.png";

import foto1 from "../../assets/images/testimonial/google.jpg";
import foto2 from "../../assets/images/testimonial/kredivo.jpg";
import foto3 from "../../assets/images/testimonial/lco.jpg";

import legalService from "../../assets/images/legalservice.jpg";

import opCp1 from "../../assets/images/officeplusCP/1.jpg";
//import opCp2 from "../../assets/images/officeplusCP/2.jpg";
//import opCp3 from "../../assets/images/officeplusCP/3.jpg";
//import opCp4 from "../../assets/images/officeplusCP/4.jpg";
//import opCp5 from "../../assets/images/officeplusCP/5.jpg";
//import opCp6 from "../../assets/images/officeplusCP/6.jpg";
import opCp7 from "../../assets/images/officeplusCP/7.jpg";
//import opCp8 from "../../assets/images/officeplusCP/8.jpg";
import opCp9 from "../../assets/images/officeplusCP/9.jpg";
import opCp10 from "../../assets/images/officeplusCP/10.jpg";
//import opCp11 from "../../assets/images/officeplusCP/11.jpg";
//import opCp12 from "../../assets/images/officeplusCP/12.jpg";
//import opCp13 from "../../assets/images/officeplusCP/13.jpg";
import opCp14 from "../../assets/images/officeplusCP/14.jpg";
//import opCp15 from "../../assets/images/officeplusCP/15.jpg";
import opCp16 from "../../assets/images/officeplusCP/16.jpg";
//import opCp17 from "../../assets/images/officeplusCP/17.jpg";
import opCp18 from "../../assets/images/officeplusCP/18.jpg";

//import opEc1 from "../../assets/images/officeplusEC/1.jpg";
//import opEc2 from "../../assets/images/officeplusEC/2.jpg";
//import opEc3 from "../../assets/images/officeplusEC/3.jpg";
import opEc4 from "../../assets/images/officeplusEC/4.jpg";
//import opEc5 from "../../assets/images/officeplusEC/5.jpg";

export const componentSetting = [
  {
    cFaq: true,
    cTestimonial: true,
    cProductList2: true
  }
];

//-----------------------------------------------------------------
//-----------------------------------------------------------------

const profileDescId =
  "<p>Di Officeplus, kami menawarkan ruang kerja yang mengundang, menginspirasi, dan kondusif untuk berkolaborasi. Anda dapat memilih antara Private Rooms dan Share Spaces - atau campuran keduanya - dan langsung bisa berbisnis.</p><p>Baik Anda seorang freelancer, pengusaha, atau startup, kami menyambut Anda untuk bergabung dengan komunitas dan pergi jauh dengan kami.</p>";
/*
const profileDescEn =
  "<p>At Officeplus, we offer workspaces that are inviting, inspiring, and conducive to collaboration. You can choose between private rooms and shared spaces – or a mix of both – and get down to business right away.</p> <p>Whether you’re a freelancer, an entrepreneur, or a startup, we welcome you to join the community and go the distance with us.</p>";
*/
export const profileBannerData = [
  {
    id: 1,
    image: opCp10,
    header: "Selamat datang di Officeplus",
    meta: "",
    description: profileDescId
  }
];

//aka product Category
export const productListData = [
  {
    id: 1,
    left: true,
    active: false,
    photo: legalService,
    productCategory: "legal service",
    productCategoryDescription:
      "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.</p> ",
    link: {
      label: "View More",
      to: "/services/legal-service",
      component: "LegalService"
    }
  },
  {
    id: 2,
    left: false,
    active: false,
    photo: opEc4,
    productCategory: "workstation",
    productCategoryDescription:
      "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.</p> ",
    link: {
      label: "View More",
      to: "/services/workstation",
      component: "Workstation"
    }
  },
  {
    id: 3,
    left: true,
    active: false,
    photo: opCp16,
    productCategory: "event space",
    productCategoryDescription:
      "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.</p> ",
    link: {
      label: "View More",
      to: "/services/event-space",
      component: "EventSpace"
    }
  },
  {
    id: 4,
    left: false,
    active: true,
    photo: opCp7,
    productCategory: "meeting room",
    productCategoryDescription:
      "<p>Cari ruangan meeting super nyaman, kondusif dan terjangkau?? Kapan lagi bisa meeting di ruangan super nyaman, kondusif dan terjangkau di Jakarta hanya 150rb/jam?? hanya di OFFICEPLUS Jakarta nikmati beragam fasilitas menyenangkan.</p><p>Kami ciptakan suasana nyaman dan menyenangkan untuk mendukung keberhasilan peresntasi bisnis yang Anda lakukan. Yakin ada yang lebih hemat dengan fasilitas lengkap? coba ditempat kami sekarang!</p>",
    link: {
      label: "View More",
      to: "/services/meeting-room",
      component: "MeetingRoom"
    }
  },
  {
    id: 5,
    left: true,
    active: false,
    photo: opCp1,
    productCategory: "private office",
    productCategoryDescription:
      "<p>Ruang kerja pribadi untuk perusahaan yang membutuhkan privasi dalam bekerja. Ruang kerja pribadi yang tersedia di desain untuk tim berukuran 3 sampai 5 orang dengan dilengkapi meja dan kursi.</p> ",
    link: {
      label: "View More",
      to: "/services/private-office",
      component: "PrivateOffice"
    }
  },
  {
    id: 6,
    left: true,
    active: true,
    photo: opCp9,
    productCategory: "coworking space",
    productCategoryDescription:
      "<p>Coworking adalah tempat bekerja secara bersama atau berkolaborasi dengan individu yang berlatar belakang pekerjaan dan perusahaan yang berbeda.. dan apa sih keuntungan dr coworking space?</p><p>selain coworking space relatif lebih murah, coworking space juga bisa membangun community atau peluang bisnis dengan mamber lain dan bisa saling sharing dengan latarbelakang bisnis yang berbeda. Yuk buruan daftar!!</p>",
    link: {
      label: "View More",
      to: "/services/coworking-space",
      component: "CoworkingSpace"
    }
  },
  {
    id: 7,
    left: false,
    active: true,
    photo: opCp18,
    productCategory: "virtual office",
    productCategoryDescription:
      "<p>Jika Kamu adalah Startup Founder, Pasti sering mendengar istilah dari virtual office atau kantor virtual?</p><p>jadi definisi virtual office itu adalah sebuah kantor dimana para penyewa hanya memiliki alamat dari kantor tersebut, namun tidak memiliki ruangan secara fisik dan kami juga menawarkan alamat kantor virtual untuk digunakan sebagai pendukung legalitas perusaahaan anda. selain lokasi yang strategis dan harga kami juga sangat terjangkau.</p>",
    link: {
      label: "View More",
      to: "/services/virtual-office",
      component: "VirtualOffice"
    }
  },
  {
    id: 8,
    left: true,
    active: false,
    photo: opCp14,
    productCategory: "Class Room",
    productCategoryDescription:
      "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.</p> ",
    link: {
      label: "View More",
      to: "/services/class-room",
      component: "ClassRoom"
    }
  }
];

export const testimonialData = [
  {
    id: 1,
    img: foto1,
    name: "Google",
    title: "",
    text: ""
  },
  {
    id: 2,
    img: foto2,
    name: "Kredivo",
    title: "",
    text: ""
  },
  {
    id: 3,
    img: foto3,
    name: "Ludony & Co",
    title: "",
    text: ""
  }
];

export const includedAmenities = [
  {
    id: 1,
    facilities: "Dedicated",
    icon: "universal access",
    active: true,
    feature: true
  },
  {
    id: 2,
    facilities: "Full Furnish",
    icon: "university",
    active: true,
    feature: true
  },
  {
    id: 3,
    facilities: "Free Mineral Water",
    icon: "coffee",
    active: true,
    feature: false
  },
  {
    id: 4,
    facilities: "Free Wifi",
    icon: "wifi",
    active: true,
    feature: true
  },
  {
    id: 5,
    facilities: "Free Listrik",
    icon: "lightbulb outline",
    active: true,
    feature: true
  },
  {
    id: 6,
    facilities: "Office Boy Standby",
    icon: "user circle",
    active: true,
    feature: true
  },
  {
    id: 7,
    facilities: "1 Meja Kerja Dan 1 Kursi",
    icon: "archive",
    active: true,
    feature: true
  },
  {
    id: 8,
    facilities:
      "Akses Kerja di Coworking Space 2 Hari/Bulan di Officeplus Central Park",
    icon: "flag outline",
    active: true,
    feature: false
  },
  {
    id: 9,
    facilities: "Alamat Kantor",
    icon: "map marker alternate",
    active: true,
    feature: true
  },
  {
    id: 10,
    facilities: "Handle Surat / Paket Masuk",
    icon: "paste",
    active: true,
    feature: true
  },
  {
    id: 11,
    facilities:
      "1 Dedicated Phone Number (021) Khusus Perusahaan Anda dan dapat Langsung Tersambung ke Handphone Anda",
    icon: "tty",
    active: true,
    feature: false
  },
  {
    id: 12,
    facilities: "Free Pengurusan SKDP",
    icon: "list alternate outline",
    active: true,
    feature: true
  },
  {
    id: 13,
    facilities: "Free Greeting atas Nama Perusaahaan Anda",
    icon: "envelope outline",
    active: true,
    feature: false
  },
  {
    id: 14,
    facilities: "Free greeting (Umum)",
    icon: "envelope open outline",
    active: true,
    feature: false
  },
  {
    id: 15,
    facilities: "Telp Masuk (di Keep)",
    icon: "phone volume",
    active: true,
    feature: true
  },
  {
    id: 16,
    facilities: "Akses ke Lantai 2",
    icon: "key",
    active: true,
    feature: false
  },
  {
    id: 17,
    facilities: "Free Coffe/Tea/Cokelat",
    icon: "coffee",
    active: true,
    feature: true
  },
  {
    id: 18,
    facilities: "No Dedicated",
    icon: "users",
    active: true,
    feature: false
  },
  {
    id: 19,
    facilities: "Free Loker",
    icon: "block layout",
    active: true,
    feature: true
  }
];
