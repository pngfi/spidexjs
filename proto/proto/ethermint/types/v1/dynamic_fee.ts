// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.7
 * source: ethermint/types/v1/dynamic_fee.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace ethermint.types.v1 {
    export class ExtensionOptionDynamicFeeTx extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            max_priority_price?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("max_priority_price" in data && data.max_priority_price != undefined) {
                    this.max_priority_price = data.max_priority_price;
                }
            }
        }
        get max_priority_price() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set max_priority_price(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            max_priority_price?: string;
        }): ExtensionOptionDynamicFeeTx {
            const message = new ExtensionOptionDynamicFeeTx({});
            if (data.max_priority_price != null) {
                message.max_priority_price = data.max_priority_price;
            }
            return message;
        }
        toObject() {
            const data: {
                max_priority_price?: string;
            } = {};
            if (this.max_priority_price != null) {
                data.max_priority_price = this.max_priority_price;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.max_priority_price.length)
                writer.writeString(1, this.max_priority_price);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ExtensionOptionDynamicFeeTx {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ExtensionOptionDynamicFeeTx();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.max_priority_price = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ExtensionOptionDynamicFeeTx {
            return ExtensionOptionDynamicFeeTx.deserialize(bytes);
        }
    }
}
