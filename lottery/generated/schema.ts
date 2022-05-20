// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Lottery extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Lottery entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Lottery entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Lottery", id.toString(), this);
  }

  static load(id: string): Lottery | null {
    return store.get("Lottery", id) as Lottery | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalUsers(): BigInt {
    let value = this.get("totalUsers");
    return value.toBigInt();
  }

  set totalUsers(value: BigInt) {
    this.set("totalUsers", Value.fromBigInt(value));
  }

  get totalTickets(): BigInt {
    let value = this.get("totalTickets");
    return value.toBigInt();
  }

  set totalTickets(value: BigInt) {
    this.set("totalTickets", Value.fromBigInt(value));
  }

  get status(): string {
    let value = this.get("status");
    return value.toString();
  }

  set status(value: string) {
    this.set("status", Value.fromString(value));
  }

  get finalNumber(): BigInt | null {
    let value = this.get("finalNumber");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set finalNumber(value: BigInt | null) {
    if (value === null) {
      this.unset("finalNumber");
    } else {
      this.set("finalNumber", Value.fromBigInt(value as BigInt));
    }
  }

  get winningTickets(): BigInt | null {
    let value = this.get("winningTickets");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set winningTickets(value: BigInt | null) {
    if (value === null) {
      this.unset("winningTickets");
    } else {
      this.set("winningTickets", Value.fromBigInt(value as BigInt));
    }
  }

  get claimedTickets(): BigInt | null {
    let value = this.get("claimedTickets");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set claimedTickets(value: BigInt | null) {
    if (value === null) {
      this.unset("claimedTickets");
    } else {
      this.set("claimedTickets", Value.fromBigInt(value as BigInt));
    }
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get endTime(): BigInt {
    let value = this.get("endTime");
    return value.toBigInt();
  }

  set endTime(value: BigInt) {
    this.set("endTime", Value.fromBigInt(value));
  }

  get ticketPrice(): BigDecimal {
    let value = this.get("ticketPrice");
    return value.toBigDecimal();
  }

  set ticketPrice(value: BigDecimal) {
    this.set("ticketPrice", Value.fromBigDecimal(value));
  }

  get firstTicket(): BigInt {
    let value = this.get("firstTicket");
    return value.toBigInt();
  }

  set firstTicket(value: BigInt) {
    this.set("firstTicket", Value.fromBigInt(value));
  }

  get lastTicket(): BigInt | null {
    let value = this.get("lastTicket");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set lastTicket(value: BigInt | null) {
    if (value === null) {
      this.unset("lastTicket");
    } else {
      this.set("lastTicket", Value.fromBigInt(value as BigInt));
    }
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalRounds(): BigInt {
    let value = this.get("totalRounds");
    return value.toBigInt();
  }

  set totalRounds(value: BigInt) {
    this.set("totalRounds", Value.fromBigInt(value));
  }

  get totalTickets(): BigInt {
    let value = this.get("totalTickets");
    return value.toBigInt();
  }

  set totalTickets(value: BigInt) {
    this.set("totalTickets", Value.fromBigInt(value));
  }

  get rounds(): Array<string> {
    let value = this.get("rounds");
    return value.toStringArray();
  }

  set rounds(value: Array<string>) {
    this.set("rounds", Value.fromStringArray(value));
  }

  get totalLUCHOW(): BigDecimal {
    let value = this.get("totalLUCHOW");
    return value.toBigDecimal();
  }

  set totalLUCHOW(value: BigDecimal) {
    this.set("totalLUCHOW", Value.fromBigDecimal(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Round extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Round entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Round entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Round", id.toString(), this);
  }

  static load(id: string): Round | null {
    return store.get("Round", id) as Round | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get lottery(): string {
    let value = this.get("lottery");
    return value.toString();
  }

  set lottery(value: string) {
    this.set("lottery", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get claimed(): boolean {
    let value = this.get("claimed");
    return value.toBoolean();
  }

  set claimed(value: boolean) {
    this.set("claimed", Value.fromBoolean(value));
  }

  get totalTickets(): BigInt {
    let value = this.get("totalTickets");
    return value.toBigInt();
  }

  set totalTickets(value: BigInt) {
    this.set("totalTickets", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}
