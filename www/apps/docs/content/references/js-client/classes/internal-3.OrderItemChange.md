---
displayed_sidebar: jsClientSidebar
---

# Class: OrderItemChange

[internal](../modules/internal-3.md).OrderItemChange

Base abstract entity for all entities

## Hierarchy

- [`SoftDeletableEntity`](internal-1.SoftDeletableEntity.md)

  ↳ **`OrderItemChange`**

## Properties

### beforeInsert

• `Private` **beforeInsert**: `any`

#### Defined in

packages/medusa/dist/models/order-item-change.d.ts:17

___

### created\_at

• **created\_at**: `Date`

#### Inherited from

[SoftDeletableEntity](internal-1.SoftDeletableEntity.md).[created_at](internal-1.SoftDeletableEntity.md#created_at)

#### Defined in

packages/medusa/dist/interfaces/models/base-entity.d.ts:6

___

### deleted\_at

• **deleted\_at**: ``null`` \| `Date`

#### Inherited from

[SoftDeletableEntity](internal-1.SoftDeletableEntity.md).[deleted_at](internal-1.SoftDeletableEntity.md#deleted_at)

#### Defined in

packages/medusa/dist/interfaces/models/soft-deletable-entity.d.ts:3

___

### id

• **id**: `string`

#### Inherited from

[SoftDeletableEntity](internal-1.SoftDeletableEntity.md).[id](internal-1.SoftDeletableEntity.md#id)

#### Defined in

packages/medusa/dist/interfaces/models/base-entity.d.ts:5

___

### line\_item

• `Optional` **line\_item**: [`LineItem`](internal-3.LineItem.md)

#### Defined in

packages/medusa/dist/models/order-item-change.d.ts:16

___

### line\_item\_id

• `Optional` **line\_item\_id**: `string`

#### Defined in

packages/medusa/dist/models/order-item-change.d.ts:15

___

### order\_edit

• **order\_edit**: [`OrderEdit`](internal-3.OrderEdit.md)

#### Defined in

packages/medusa/dist/models/order-item-change.d.ts:12

___

### order\_edit\_id

• **order\_edit\_id**: `string`

#### Defined in

packages/medusa/dist/models/order-item-change.d.ts:11

___

### original\_line\_item

• `Optional` **original\_line\_item**: [`LineItem`](internal-3.LineItem.md)

#### Defined in

packages/medusa/dist/models/order-item-change.d.ts:14

___

### original\_line\_item\_id

• `Optional` **original\_line\_item\_id**: `string`

#### Defined in

packages/medusa/dist/models/order-item-change.d.ts:13

___

### type

• **type**: [`OrderEditItemChangeType`](../enums/internal-3.OrderEditItemChangeType.md)

#### Defined in

packages/medusa/dist/models/order-item-change.d.ts:10

___

### updated\_at

• **updated\_at**: `Date`

#### Inherited from

[SoftDeletableEntity](internal-1.SoftDeletableEntity.md).[updated_at](internal-1.SoftDeletableEntity.md#updated_at)

#### Defined in

packages/medusa/dist/interfaces/models/base-entity.d.ts:7
