---
displayed_sidebar: jsClientSidebar
---

# Class: StorePostCartsCartReq

[internal](../modules/internal-8.md).[internal](../modules/internal-8.internal.md).StorePostCartsCartReq

**`Schema`**

StorePostCartsCartReq
type: object
properties:
  region_id:
    type: string
    description: "The ID of the Region to create the Cart in. Setting the cart's region can affect the pricing of the items in the cart as well as the used currency."
  country_code:
    type: string
    description: "The 2 character ISO country code to create the Cart in. Setting this parameter will set the country code of the shipping address."
    externalDocs:
      url: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
      description: See a list of codes.
  email:
    type: string
    description: "An email to be used on the Cart."
    format: email
  sales_channel_id:
    type: string
    description: "The ID of the Sales channel to create the Cart in. The cart's sales channel affects which products can be added to the cart. If a product does not
     exist in the cart's sales channel, it cannot be added to the cart. If you add a publishable API key in the header of this request and specify a sales channel ID,
     the specified sales channel must be within the scope of the publishable API key's resources."
  billing_address:
    description: "The Address to be used for billing purposes."
    anyOf:
      - $ref: "#/components/schemas/AddressPayload"
        description: A full billing address object.
      - type: string
        description: The billing address ID
  shipping_address:
    description: "The Address to be used for shipping purposes."
    anyOf:
      - $ref: "#/components/schemas/AddressPayload"
        description: A full shipping address object.
      - type: string
        description: The shipping address ID
  gift_cards:
    description: "An array of Gift Card codes to add to the Cart."
    type: array
    items:
      type: object
      required:
        - code
      properties:
        code:
          description: "The code of a gift card."
          type: string
  discounts:
    description: "An array of Discount codes to add to the Cart."
    type: array
    items:
      type: object
      required:
        - code
      properties:
        code:
          description: "The code of the discount."
          type: string
  customer_id:
    description: "The ID of the Customer to associate the Cart with."
    type: string
  context:
    description: "An object to provide context to the Cart. The `context` field is automatically populated with `ip` and `user_agent`"
    type: object
    example:
      ip: "::1"
      user_agent: "Chrome"

## Properties

### billing\_address

• `Optional` **billing\_address**: `string` \| [`AddressPayload`](internal.AddressPayload.md)

#### Defined in

packages/medusa/dist/api/routes/store/carts/update-cart.d.ts:136

___

### context

• `Optional` **context**: `object`

#### Defined in

packages/medusa/dist/api/routes/store/carts/update-cart.d.ts:141

___

### country\_code

• `Optional` **country\_code**: `string`

#### Defined in

packages/medusa/dist/api/routes/store/carts/update-cart.d.ts:134

___

### customer\_id

• `Optional` **customer\_id**: `string`

#### Defined in

packages/medusa/dist/api/routes/store/carts/update-cart.d.ts:140

___

### discounts

• `Optional` **discounts**: [`Discount`](internal-8.Discount-2.md)[]

#### Defined in

packages/medusa/dist/api/routes/store/carts/update-cart.d.ts:139

___

### email

• `Optional` **email**: `string`

#### Defined in

packages/medusa/dist/api/routes/store/carts/update-cart.d.ts:135

___

### gift\_cards

• `Optional` **gift\_cards**: [`GiftCard`](internal-8.GiftCard.md)[]

#### Defined in

packages/medusa/dist/api/routes/store/carts/update-cart.d.ts:138

___

### region\_id

• `Optional` **region\_id**: `string`

#### Defined in

packages/medusa/dist/api/routes/store/carts/update-cart.d.ts:133

___

### sales\_channel\_id

• `Optional` **sales\_channel\_id**: `string`

#### Defined in

packages/medusa/dist/api/routes/store/carts/update-cart.d.ts:142

___

### shipping\_address

• `Optional` **shipping\_address**: `string` \| [`AddressPayload`](internal.AddressPayload.md)

#### Defined in

packages/medusa/dist/api/routes/store/carts/update-cart.d.ts:137
