---
displayed_sidebar: jsClientSidebar
---

# Class: LineItemsResource

## Hierarchy

- `default`

  ↳ **`LineItemsResource`**

## Methods

### create

▸ **create**(`cart_id`, `payload`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`StoreCartsRes`](../modules/internal-8.internal.md#storecartsres)\>

Creates a line-item for a cart

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cart_id` | `string` | id of cart |
| `payload` | [`StorePostCartsCartLineItemsReq`](internal-8.internal.StorePostCartsCartLineItemsReq.md) | details needed to create a line-item |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |  |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`StoreCartsRes`](../modules/internal-8.internal.md#storecartsres)\>

#### Defined in

[packages/medusa-js/src/resources/line-items.ts:17](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/line-items.ts#L17)

___

### delete

▸ **delete**(`cart_id`, `line_id`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`StoreCartsRes`](../modules/internal-8.internal.md#storecartsres)\>

Remove a line-item from a cart

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cart_id` | `string` | id of cart |
| `line_id` | `string` | id of item to remove |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |  |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`StoreCartsRes`](../modules/internal-8.internal.md#storecartsres)\>

#### Defined in

[packages/medusa-js/src/resources/line-items.ts:50](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/line-items.ts#L50)

___

### update

▸ **update**(`cart_id`, `line_id`, `payload`, `customHeaders?`): [`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`StoreCartsRes`](../modules/internal-8.internal.md#storecartsres)\>

Updates a line-item.
Only quantity updates are allowed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cart_id` | `string` | id of cart |
| `line_id` | `string` | id of item to update |
| `payload` | [`StorePostCartsCartLineItemsItemReq`](internal-8.internal.StorePostCartsCartLineItemsItemReq.md) | details needed to update a line-item |
| `customHeaders` | [`Record`](../modules/internal.md#record)<`string`, `any`\> |  |

#### Returns

[`ResponsePromise`](../modules/internal-12.md#responsepromise)<[`StoreCartsRes`](../modules/internal-8.internal.md#storecartsres)\>

#### Defined in

[packages/medusa-js/src/resources/line-items.ts:34](https://github.com/medusajs/medusa/blob/c4ac5e6959/packages/medusa-js/src/resources/line-items.ts#L34)
