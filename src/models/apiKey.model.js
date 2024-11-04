"use strict";

const { model, Schema } = require("mongoose"); // Erase if already required

const DOCUMENT_NAME = "ApiKey";
const COLLECTION_NAME = "apiKeys";

// Declare the Schema of the Mongo model
var apiKeySchema = new Schema(
    {
        key: {
            type: String,
            required: true,
            unique: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
        permissions: {
            type: [String],
            required: true,
            enum: ["0000", "1111", "2222"],
        },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
    },
);

apiKeySchema.index({ key: 1 });

//Export the model
module.exports = model(DOCUMENT_NAME, apiKeySchema);