// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.7
 * source: ibc/applications/interchain_accounts/v1/metadata.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export namespace ibc.applications.interchain_accounts.v1 {
    export class Metadata extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            version?: string;
            controller_connection_id?: string;
            host_connection_id?: string;
            address?: string;
            encoding?: string;
            tx_type?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("version" in data && data.version != undefined) {
                    this.version = data.version;
                }
                if ("controller_connection_id" in data && data.controller_connection_id != undefined) {
                    this.controller_connection_id = data.controller_connection_id;
                }
                if ("host_connection_id" in data && data.host_connection_id != undefined) {
                    this.host_connection_id = data.host_connection_id;
                }
                if ("address" in data && data.address != undefined) {
                    this.address = data.address;
                }
                if ("encoding" in data && data.encoding != undefined) {
                    this.encoding = data.encoding;
                }
                if ("tx_type" in data && data.tx_type != undefined) {
                    this.tx_type = data.tx_type;
                }
            }
        }
        get version() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set version(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get controller_connection_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set controller_connection_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get host_connection_id() {
            return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
        }
        set host_connection_id(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get address() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set address(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get encoding() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set encoding(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get tx_type() {
            return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
        }
        set tx_type(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            version?: string;
            controller_connection_id?: string;
            host_connection_id?: string;
            address?: string;
            encoding?: string;
            tx_type?: string;
        }): Metadata {
            const message = new Metadata({});
            if (data.version != null) {
                message.version = data.version;
            }
            if (data.controller_connection_id != null) {
                message.controller_connection_id = data.controller_connection_id;
            }
            if (data.host_connection_id != null) {
                message.host_connection_id = data.host_connection_id;
            }
            if (data.address != null) {
                message.address = data.address;
            }
            if (data.encoding != null) {
                message.encoding = data.encoding;
            }
            if (data.tx_type != null) {
                message.tx_type = data.tx_type;
            }
            return message;
        }
        toObject() {
            const data: {
                version?: string;
                controller_connection_id?: string;
                host_connection_id?: string;
                address?: string;
                encoding?: string;
                tx_type?: string;
            } = {};
            if (this.version != null) {
                data.version = this.version;
            }
            if (this.controller_connection_id != null) {
                data.controller_connection_id = this.controller_connection_id;
            }
            if (this.host_connection_id != null) {
                data.host_connection_id = this.host_connection_id;
            }
            if (this.address != null) {
                data.address = this.address;
            }
            if (this.encoding != null) {
                data.encoding = this.encoding;
            }
            if (this.tx_type != null) {
                data.tx_type = this.tx_type;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.version.length)
                writer.writeString(1, this.version);
            if (this.controller_connection_id.length)
                writer.writeString(2, this.controller_connection_id);
            if (this.host_connection_id.length)
                writer.writeString(3, this.host_connection_id);
            if (this.address.length)
                writer.writeString(4, this.address);
            if (this.encoding.length)
                writer.writeString(5, this.encoding);
            if (this.tx_type.length)
                writer.writeString(6, this.tx_type);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Metadata {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Metadata();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.version = reader.readString();
                        break;
                    case 2:
                        message.controller_connection_id = reader.readString();
                        break;
                    case 3:
                        message.host_connection_id = reader.readString();
                        break;
                    case 4:
                        message.address = reader.readString();
                        break;
                    case 5:
                        message.encoding = reader.readString();
                        break;
                    case 6:
                        message.tx_type = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Metadata {
            return Metadata.deserialize(bytes);
        }
    }
}
