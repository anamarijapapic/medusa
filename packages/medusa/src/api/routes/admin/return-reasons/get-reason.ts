import {
  defaultAdminReturnReasonsFields,
  defaultAdminReturnReasonsRelations,
} from "."

import { ReturnReasonService } from "../../../../services"

/**
 * @oas [get] /admin/return-reasons/{id}
 * operationId: "GetReturnReasonsReason"
 * summary: "Get a Return Reason"
 * description: "Retrieve a Return Reason's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Return Reason.
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.returnReasons.retrieve(returnReasonId)
 *       .then(({ return_reason }) => {
 *         console.log(return_reason.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/return-reasons/{id}' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Return Reasons
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminReturnReasonsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
export default async (req, res) => {
  const { id } = req.params
  const returnReasonService: ReturnReasonService = req.scope.resolve(
    "returnReasonService"
  )

  const data = await returnReasonService.retrieve(id, {
    select: defaultAdminReturnReasonsFields,
    relations: defaultAdminReturnReasonsRelations,
  })

  res.status(200).json({ return_reason: data })
}
