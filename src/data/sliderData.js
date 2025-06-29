import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const slides = [
  {
    id: 1,
    image: image1,
    title: "Transform Your Business with SevAI",
    subtitle: "DEP-Digital Enterprise Platform with Next GEN-ERP",
    subtitle2: "Expert SevAI Application Consulting to elevate your business processes",
    buttons: [
      { label: "Services", link: "/services" },          
      { label: "Industries", link: "/industries" }      
    ]
  },
  {
    id: 2,
    image: image2,
    title: "Drive Innovation\nwith SevAI - DEP Next GEN-ERP",
    subtitle: "Leverage best practices in SevATBEP for enterprise-grade efficiency",
    buttons: [
      { label: "Services", link: "/services" },
      { label: "Industries", link: "/industries" }
    ]
  },
  {
    id: 3,
    image: image3,
    title: "First AI Powered Dep-Digital Enterprise Platform",
    subtitle: "Supporting SevAI - DEP Next GEN-ERP",
    buttons: [
      { label: "Services", link: "/services" },
      { label: "Industries", link: "/industries" }
    ]
  }
];

export default slides;
