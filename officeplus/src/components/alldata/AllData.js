//import noImage from "../../assets/images/noimage.png";

import foto1 from "../../assets/images/testimonial/1.png";
import foto2 from "../../assets/images/testimonial/2.png";
import foto3 from "../../assets/images/testimonial/3.png";
import foto4 from "../../assets/images/testimonial/4.png";

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

import { includedAmenitiesData } from "./includedAmenities";
import { productData } from "./product";
import { productCategoryData } from "./productCategory";
import { productLocationData } from "./productLocation";

export const alldata = [
  {
    environments: {
      production: {
        content: {
          includedAmenities: { includedAmenitiesData },
          product: { productData },
          productCategory: { productCategoryData },
          productLocation: { productLocationData }
        }
      }
    }
  }
];

//-----------------------------------------------------------------
//-----------------------------------------------------------------

export const profileBannerData = [
  {
    id: 1,
    image: opCp10,
    header: "Welcome to Officeplus",
    meta: "",
    description:
      "<p>At Officeplus, we offer workspaces that are inviting, inspiring, and conducive to collaboration. You can choose between private rooms and shared spaces – or a mix of both – and get down to business right away.</p> <p>Whether you’re a freelancer, an entrepreneur, or a startup, we welcome you to join the community and go the distance with us.</p>"
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
      "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.</p> ",
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
      "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.</p> ",
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
      "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.</p> ",
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
      "<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.</p>",
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
    name: "Ramon Ray",
    title: "Entrepreneur & Global Speaker",
    text:
      "My favorite thing about WeWork is the easy access to facilities and network of peers (online and at each location) who I can help or get help from!"
  },
  {
    id: 2,
    img: foto2,
    name: "Saeed Jabbar",
    title: "Founder of Inclusion",
    text:
      "I've scaled my organization, hosted successful events, and most importantly met lifelong friends all within the WeWork ecosystem."
  },
  {
    id: 3,
    img: foto3,
    name: "Fabricio González Antuña",
    title: "CEO of Dynamia",
    text:
      "The most important thing is that all of the community has embedded a standard of trust. You breathe trust, and for developing business, it's a great plus!"
  },
  {
    id: 4,
    img: foto4,
    name: "Rachel Wilson",
    title: "Founder of Inclusion",
    text:
      "There's something empowering about working in a space where you are encouraged to create brilliant ideas that disrupt culture followed by the support of a team of people who want you to win."
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

export const faqData = [
  {
    id: 1,
    q: "Are your memberships really month-to-month?",
    a:
      "<p>Yes! Our flexible month-to-month commitment provides you with the stability of an office along with the flexibility you need to grow your business. WeWork also offers longer term commitments; call us at 021 2920 6264 or 0812 9072 3828 or email us at sales@officepluscenter.com for more information.</p>",
    active: true
  },
  {
    id: 2,
    q: "Am I allowed to bring my dog? What is your pet policy?",
    a:
      "<p>Our pet policy varies by building. Please ask the WeWork Community Manager when you take a tour for the most up-to-date information.</p>",
    active: true
  },
  {
    id: 3,
    q: "Can I add mail and package handling?",
    a:
      "<p>Mail and package handling is included for Dedicated Desk and Private Office plans. Hot Desk and We Membership plans offer this service à la carte at most buildings. Reach out to the local Community team at your desired location to find out more.</p>",
    active: true
  },
  {
    id: 4,
    q: "Does WeWork give referral rewards?",
    a:
      "<p>Yes! Our referral program rewards WeWork members with 10% of the monthly Membership Fee of the member who signs up for up to one year. This applies only to Dedicated Desk and Private Office membership plans. There are no limits to the number of referral rewards a member may earn.</p>",
    active: true
  },
  {
    id: 5,
    q: "Am I able to transfer to another WeWork location?",
    a:
      "<p>If the building of your choice has availability, we’re happy to work with you to organize a seamless move.</p>",
    active: true
  },
  {
    id: 6,
    q: "What are your building hours? When are you open?",
    a:
      "<p>WeWork staff are generally onsite at each location between 9 AM – 6 PM local time Monday through Friday at all locations. For members with Hot Desks, Dedicated Desks, or Private Offices, your location is accessible by keycard 24/7.</p>",
    active: true
  }
];
