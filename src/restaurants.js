import dbConnect from "./dbConnect.js";
const collectionName = "restaurants";

// GET all
export async function getAllRestaurants(req, res) {
    const db = dbConnect()
    const collection = db.collection(collectionName).get();
    const restaurants = collection.docs.map( (doc) => {
        return rest = doc.data()
    } );

    res.send(restaurants)
};

// GET by ID
export async function getRestaurantsById(req, res) {
    const db = dbConnect()
    const { restId } = req.params
    const doc = db.collection(collectionName).doc(restId).get()
    const rest = doc.data()

    res.send("Got Restaurant: " + rest)
};

// CREATE
export async function createRestaurant(req, res) {
    const db = dbConnect()
    const newRestaurant = req.body
    await db.collection(collectionName).add(newRestaurant)

    res.status(201).send("Added Restaurant")
};

// UPDATE
export async function updateRestaurant(req, res) {
    const { restId } = req.params
    const updateInfo = req.body

    const db = dbConnect();
    await db.collection(collectionName).doc(restId).update(updateInfo)
    res.status(202).send("Restaurant Updated")
};

// DELETE
export async function deleteRestaurant(req, res) {
    const {restId} = req.params

    const db = dbConnect();
    await db.collection(collectionName).doc(restId).delete()
    res.send("Restaurant Deleted")
};