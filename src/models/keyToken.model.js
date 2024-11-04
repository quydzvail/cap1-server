"use strict";

const { Schema, model } = require("mongoose"); // Erase if already required

const DOCUMENT_NAME = "Key";
const COLLECTION_NAME = "keys";

// Declare the Schema of the Mongo model
var keyTokenSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Shop",
        },
        privateKey: {
            type: String,
            required: true,
        },
        publicKey: {
            type: String,
            required: true,
        },
        refreshTokenUsed: {
            type: Array,
            default: [],
        },
        refreshToken: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    },
);

keyTokenSchema.index({ user: 1, privateKey: 1, publicKey: 1 });

//Export the model
module.exports = model(DOCUMENT_NAME, keyTokenSchema);
