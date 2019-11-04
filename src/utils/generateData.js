import faker from 'faker';

function generateRooms(n) {
    let rooms = [];

    for (let id=1; id <= n; id++) {
        let id= faker.random.number();
        let roomName= faker.random.arrayElement(['Deluxe', 'Permium', 'Standard']);
        let roomDescription = faker.lorem.sentence();
        let maxOccupancy = faker.random.number({min:1, max:10});
        let priceInUsd = faker.random.number(200.0);

        rooms.push({
            "id": id,
            "name": roomName,
            "description": roomDescription,
            "max_occupancy": maxOccupancy,
            "price_in_usd": priceInUsd,
        })
    }
    return rooms;
}

function generateImages() {
    let images = [];
    for (let id=1; id <= 3; id++) {
        let image = faker.random.arrayElement(['image1','image2', 'image3', 'image4', 'image5', 'image6']);
        images.push(image);
        }

    return images;
}

function generateAmenities(n) {
    let amenities = [];
    for(let id=1; id<=n; id++) {
        let amenity = faker.random.arrayElement(['free_parking','free_wifi','pets','restaurant','gym','pool','spa']);
        amenities.push(amenity);
    }

    return amenities;
}

const generateHotels = () => {

  let hotels = []

    let _id = faker.random.number();
    let name = faker.company.companyName();
    let description = faker.lorem.sentence();
    let distance_to_venue = faker.random.number(3000);
    let rating = faker.random.number(5.0);
    let price_category = faker.random.arrayElement(['low', 'medium', 'high']);
    
    hotels.push({
        "_id": _id,
        "name": name,
        "description": description,
        "distance_to_venue": distance_to_venue,
        "rating": rating,
        "price_category": price_category,
        "amenities": generateAmenities(faker.random.number({min:1, max:4})),
        "images": generateImages(),
        "rooms": generateRooms(faker.random.number({min:2, max:6})),
    });

  return { "hotels": hotels }
}

export default generateHotels;
