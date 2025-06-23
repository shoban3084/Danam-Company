import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const slides = [
  {
    id: 1,
    image: image1,
    title: "Transform Your Business with SAP",
    subtitle: "Expert SAP Application Consulting to elevate your business processes",
    buttons: [
      { label: "Services", link: "/service.html" },
      { label: "Industries", link: "/service-details.html" }
    ]
  },
  {
    id: 2,
    image: image2, 
    title: "Drive Innovation\nwith SAP Solutions",
    subtitle: "Leverage best practices in SAP for enterprise-grade efficiency",
    buttons: [
      { label: "Services", link: "/service.html" },
      { label: "Industries", link: "/service-details.html" }
    ]
  },
  {
    id: 3,
    image: image3, 
    title: "First AI Powered Dep-Digital Enterprise Platform",
    subtitle: "Supporting SevAIBEP Next GEN-ERP",
    buttons: [
      { label: "Services", link: "/service.html" },
      { label: "Industries", link: "/service-details.html" }
    ]
  }
];

export default slides;