// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.21.7
 * source: cosmos/feegrant/v1beta1/feegrant.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_2 from "../../../google/protobuf/any";
import * as dependency_4 from "../../base/v1beta1/coin";
import * as dependency_5 from "../../../google/protobuf/timestamp";
import * as dependency_6 from "../../../google/protobuf/duration";
import * as pb_1 from "google-protobuf";
export namespace cosmos.feegrant.v1beta1 {
    export class BasicAllowance extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            spend_limit?: dependency_4.cosmos.base.v1beta1.Coin[];
            expiration?: dependency_5.google.protobuf.Timestamp;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("spend_limit" in data && data.spend_limit != undefined) {
                    this.spend_limit = data.spend_limit;
                }
                if ("expiration" in data && data.expiration != undefined) {
                    this.expiration = data.expiration;
                }
            }
        }
        get spend_limit() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 1) as dependency_4.cosmos.base.v1beta1.Coin[];
        }
        set spend_limit(value: dependency_4.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get expiration() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Timestamp, 2) as dependency_5.google.protobuf.Timestamp;
        }
        set expiration(value: dependency_5.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_expiration() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            spend_limit?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            expiration?: ReturnType<typeof dependency_5.google.protobuf.Timestamp.prototype.toObject>;
        }): BasicAllowance {
            const message = new BasicAllowance({});
            if (data.spend_limit != null) {
                message.spend_limit = data.spend_limit.map(item => dependency_4.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            if (data.expiration != null) {
                message.expiration = dependency_5.google.protobuf.Timestamp.fromObject(data.expiration);
            }
            return message;
        }
        toObject() {
            const data: {
                spend_limit?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>[];
                expiration?: ReturnType<typeof dependency_5.google.protobuf.Timestamp.prototype.toObject>;
            } = {};
            if (this.spend_limit != null) {
                data.spend_limit = this.spend_limit.map((item: dependency_4.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            if (this.expiration != null) {
                data.expiration = this.expiration.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.spend_limit.length)
                writer.writeRepeatedMessage(1, this.spend_limit, (item: dependency_4.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (this.has_expiration)
                writer.writeMessage(2, this.expiration, () => this.expiration.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BasicAllowance {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BasicAllowance();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.spend_limit, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin));
                        break;
                    case 2:
                        reader.readMessage(message.expiration, () => message.expiration = dependency_5.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): BasicAllowance {
            return BasicAllowance.deserialize(bytes);
        }
    }
    export class PeriodicAllowance extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            basic?: BasicAllowance;
            period?: dependency_6.google.protobuf.Duration;
            period_spend_limit?: dependency_4.cosmos.base.v1beta1.Coin[];
            period_can_spend?: dependency_4.cosmos.base.v1beta1.Coin[];
            period_reset?: dependency_5.google.protobuf.Timestamp;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3, 4], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("basic" in data && data.basic != undefined) {
                    this.basic = data.basic;
                }
                if ("period" in data && data.period != undefined) {
                    this.period = data.period;
                }
                if ("period_spend_limit" in data && data.period_spend_limit != undefined) {
                    this.period_spend_limit = data.period_spend_limit;
                }
                if ("period_can_spend" in data && data.period_can_spend != undefined) {
                    this.period_can_spend = data.period_can_spend;
                }
                if ("period_reset" in data && data.period_reset != undefined) {
                    this.period_reset = data.period_reset;
                }
            }
        }
        get basic() {
            return pb_1.Message.getWrapperField(this, BasicAllowance, 1) as BasicAllowance;
        }
        set basic(value: BasicAllowance) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_basic() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get period() {
            return pb_1.Message.getWrapperField(this, dependency_6.google.protobuf.Duration, 2) as dependency_6.google.protobuf.Duration;
        }
        set period(value: dependency_6.google.protobuf.Duration) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_period() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get period_spend_limit() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 3) as dependency_4.cosmos.base.v1beta1.Coin[];
        }
        set period_spend_limit(value: dependency_4.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get period_can_spend() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.base.v1beta1.Coin, 4) as dependency_4.cosmos.base.v1beta1.Coin[];
        }
        set period_can_spend(value: dependency_4.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        get period_reset() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Timestamp, 5) as dependency_5.google.protobuf.Timestamp;
        }
        set period_reset(value: dependency_5.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get has_period_reset() {
            return pb_1.Message.getField(this, 5) != null;
        }
        static fromObject(data: {
            basic?: ReturnType<typeof BasicAllowance.prototype.toObject>;
            period?: ReturnType<typeof dependency_6.google.protobuf.Duration.prototype.toObject>;
            period_spend_limit?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            period_can_spend?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            period_reset?: ReturnType<typeof dependency_5.google.protobuf.Timestamp.prototype.toObject>;
        }): PeriodicAllowance {
            const message = new PeriodicAllowance({});
            if (data.basic != null) {
                message.basic = BasicAllowance.fromObject(data.basic);
            }
            if (data.period != null) {
                message.period = dependency_6.google.protobuf.Duration.fromObject(data.period);
            }
            if (data.period_spend_limit != null) {
                message.period_spend_limit = data.period_spend_limit.map(item => dependency_4.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            if (data.period_can_spend != null) {
                message.period_can_spend = data.period_can_spend.map(item => dependency_4.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            if (data.period_reset != null) {
                message.period_reset = dependency_5.google.protobuf.Timestamp.fromObject(data.period_reset);
            }
            return message;
        }
        toObject() {
            const data: {
                basic?: ReturnType<typeof BasicAllowance.prototype.toObject>;
                period?: ReturnType<typeof dependency_6.google.protobuf.Duration.prototype.toObject>;
                period_spend_limit?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>[];
                period_can_spend?: ReturnType<typeof dependency_4.cosmos.base.v1beta1.Coin.prototype.toObject>[];
                period_reset?: ReturnType<typeof dependency_5.google.protobuf.Timestamp.prototype.toObject>;
            } = {};
            if (this.basic != null) {
                data.basic = this.basic.toObject();
            }
            if (this.period != null) {
                data.period = this.period.toObject();
            }
            if (this.period_spend_limit != null) {
                data.period_spend_limit = this.period_spend_limit.map((item: dependency_4.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            if (this.period_can_spend != null) {
                data.period_can_spend = this.period_can_spend.map((item: dependency_4.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            if (this.period_reset != null) {
                data.period_reset = this.period_reset.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_basic)
                writer.writeMessage(1, this.basic, () => this.basic.serialize(writer));
            if (this.has_period)
                writer.writeMessage(2, this.period, () => this.period.serialize(writer));
            if (this.period_spend_limit.length)
                writer.writeRepeatedMessage(3, this.period_spend_limit, (item: dependency_4.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (this.period_can_spend.length)
                writer.writeRepeatedMessage(4, this.period_can_spend, (item: dependency_4.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (this.has_period_reset)
                writer.writeMessage(5, this.period_reset, () => this.period_reset.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PeriodicAllowance {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PeriodicAllowance();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.basic, () => message.basic = BasicAllowance.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.period, () => message.period = dependency_6.google.protobuf.Duration.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.period_spend_limit, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin));
                        break;
                    case 4:
                        reader.readMessage(message.period_can_spend, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_4.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_4.cosmos.base.v1beta1.Coin));
                        break;
                    case 5:
                        reader.readMessage(message.period_reset, () => message.period_reset = dependency_5.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PeriodicAllowance {
            return PeriodicAllowance.deserialize(bytes);
        }
    }
    export class AllowedMsgAllowance extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            allowance?: dependency_2.google.protobuf.Any;
            allowed_messages?: string[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("allowance" in data && data.allowance != undefined) {
                    this.allowance = data.allowance;
                }
                if ("allowed_messages" in data && data.allowed_messages != undefined) {
                    this.allowed_messages = data.allowed_messages;
                }
            }
        }
        get allowance() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 1) as dependency_2.google.protobuf.Any;
        }
        set allowance(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_allowance() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get allowed_messages() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as string[];
        }
        set allowed_messages(value: string[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            allowance?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            allowed_messages?: string[];
        }): AllowedMsgAllowance {
            const message = new AllowedMsgAllowance({});
            if (data.allowance != null) {
                message.allowance = dependency_2.google.protobuf.Any.fromObject(data.allowance);
            }
            if (data.allowed_messages != null) {
                message.allowed_messages = data.allowed_messages;
            }
            return message;
        }
        toObject() {
            const data: {
                allowance?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
                allowed_messages?: string[];
            } = {};
            if (this.allowance != null) {
                data.allowance = this.allowance.toObject();
            }
            if (this.allowed_messages != null) {
                data.allowed_messages = this.allowed_messages;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_allowance)
                writer.writeMessage(1, this.allowance, () => this.allowance.serialize(writer));
            if (this.allowed_messages.length)
                writer.writeRepeatedString(2, this.allowed_messages);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AllowedMsgAllowance {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AllowedMsgAllowance();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.allowance, () => message.allowance = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    case 2:
                        pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AllowedMsgAllowance {
            return AllowedMsgAllowance.deserialize(bytes);
        }
    }
    export class Grant extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            granter?: string;
            grantee?: string;
            allowance?: dependency_2.google.protobuf.Any;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("granter" in data && data.granter != undefined) {
                    this.granter = data.granter;
                }
                if ("grantee" in data && data.grantee != undefined) {
                    this.grantee = data.grantee;
                }
                if ("allowance" in data && data.allowance != undefined) {
                    this.allowance = data.allowance;
                }
            }
        }
        get granter() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set granter(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get grantee() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set grantee(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get allowance() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Any, 3) as dependency_2.google.protobuf.Any;
        }
        set allowance(value: dependency_2.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_allowance() {
            return pb_1.Message.getField(this, 3) != null;
        }
        static fromObject(data: {
            granter?: string;
            grantee?: string;
            allowance?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
        }): Grant {
            const message = new Grant({});
            if (data.granter != null) {
                message.granter = data.granter;
            }
            if (data.grantee != null) {
                message.grantee = data.grantee;
            }
            if (data.allowance != null) {
                message.allowance = dependency_2.google.protobuf.Any.fromObject(data.allowance);
            }
            return message;
        }
        toObject() {
            const data: {
                granter?: string;
                grantee?: string;
                allowance?: ReturnType<typeof dependency_2.google.protobuf.Any.prototype.toObject>;
            } = {};
            if (this.granter != null) {
                data.granter = this.granter;
            }
            if (this.grantee != null) {
                data.grantee = this.grantee;
            }
            if (this.allowance != null) {
                data.allowance = this.allowance.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.granter.length)
                writer.writeString(1, this.granter);
            if (this.grantee.length)
                writer.writeString(2, this.grantee);
            if (this.has_allowance)
                writer.writeMessage(3, this.allowance, () => this.allowance.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Grant {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Grant();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.granter = reader.readString();
                        break;
                    case 2:
                        message.grantee = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.allowance, () => message.allowance = dependency_2.google.protobuf.Any.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Grant {
            return Grant.deserialize(bytes);
        }
    }
}
