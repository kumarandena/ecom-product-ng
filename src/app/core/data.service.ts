import { Injectable } from "@angular/core";

export interface productData {
    id: string;
    name: string;
    description: string;
    width: string;
    height: string;
    isSmart: string;
}

export interface dataFormsItem {
    caption: string;
    type: string;
    mandatory: boolean;
    defaultValue: string;
    validationMessage: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private products = new Array<productData>(
        {
            id: 'fiu9gxyz6lk0',
            name: 'Mi LED Smart TV 4A Pro',
            description: 'Enjoy television viewing like never before with this 108-cm (43) Full HD LED TV from Mi. Apart from featuring 1 GB of RAM and 8 GB of storage space, this TV also comes with cinematic sound quality, a rich range of colours, and multiple connectivity options. Also, with PatchWall and Google Voice Search, navigating and finding content to watch is simple and convenient.',
            width: '43.6" 110.7 cm',
            height: '24.5" 62.2 cm',
            isSmart: 'Yes'
        },
        {
            id: 'axeaz0ihmoo0',
            name: 'Blaupunkt Smart TV',
            description: 'Superior sound quality coupled with captivating image quality gives you an immersive viewing experience. Bring home this Blaupunkt TV and enjoy the luxury of a cinematic experience in the comfort of your home.',
            width: '47.9" 121.7 cm',
            height: '27.0" 68.6 cm',
            isSmart: 'Yes'
        },
        {
            id: '74k7u4swlc80',
            name: 'Kodak XSMART',
            description: 'This sleek HD Ready Smart TV offers you a better and smarter way to watch television. It facilitates seamless Wi-Fi and LAN connectivity. Its wire-free design aims to make your home a clutter-free zone.',
            width: '52.3" 132.8 cm',
            height: '29.4" 74.7 cm',
            isSmart: 'Yes'
        },
        {
            id: 'u8n4136dd8g0',
            name: 'Vu Full HD LED TV',
            description: 'The A+ grade pure prism panel eliminates ambient light reflection and provides picture-perfect clarity, taking your movie-watching experience to the next level.',
            width: '56.7" 144.0 cm',
            height: '31.9" 81.0 cm',
            isSmart: 'No'
        }
    );

    private dataForms = new Array<dataFormsItem>(
        {
            caption: "Name",
            type: "text",
            mandatory: true,
            defaultValue: "",
            validationMessage: "Name is mandatory"

        },
        {
            caption: "Description",
            type: "text",
            mandatory: true,
            defaultValue: "Please enter something here....",
            validationMessage: "Oops you can't have it empty"

        },
        {
            caption: "Width",
            type: "text",
            mandatory: false,
            defaultValue: "Yes",
            validationMessage: ""
        },
        {
            caption: "Height",
            type: "text",
            mandatory: false,
            defaultValue: "",
            validationMessage: ""

        },
        {
            caption: "IsSmart",
            type: "bool",
            mandatory: true,
            defaultValue: "False",
            validationMessage: ""
        }
    );

    getProducts(): Array<productData> {
        return this.products;
    }

    putProduct(data: productData): boolean {
        this.products.unshift(data);
        return true;
    }

    getdataForms(): Array<dataFormsItem> {
        return this.dataForms;
    }
}
