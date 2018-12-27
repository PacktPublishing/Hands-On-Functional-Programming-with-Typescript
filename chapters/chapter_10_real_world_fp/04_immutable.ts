import { Record } from "immutable";

namespace immutable_demo_1 {

    interface StreetInterface {
        num: number;
        name: string;
    }

    const StreetRecord = Record({
        num: 0,
        name: ""
    });

    class Street extends StreetRecord implements StreetInterface {
        constructor(props: StreetInterface) {
            super(props);
        }
    }

    interface AddressInterface {
        city: string;
        street: Street;
    }

    const AddressRecord = Record({
        city: "",
        street: new Street({
            num: 0,
            name: ""
        })
    });

    class Address extends AddressRecord implements AddressInterface {
        constructor(props: AddressInterface) {
            super(props);
        }
    }

    const address = new Address({
        city: "Lonson",
        street: new Street({
            num: 1,
            name: "rathbone square"
        })
    });

    const street = address.get("street");
    const street2 = street.set("name", "Rathbone square");
    const address2 = address.set("street", street2);

    console.log(
        address.toJS(),
        address2.toJS()
    );

}
