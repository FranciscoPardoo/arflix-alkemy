import { Footer } from "flowbite-react";


function FooterComponent() {
    return (
    <Footer container className="bg-black">
        <Footer.Copyright href="#" by="ARflix™   |   Alkemy challenge" year={2024} />
        <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
    </Footer>
    )
}

export default FooterComponent;