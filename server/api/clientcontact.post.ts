export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const formURL = process.env.clientContactFormURL || ""

  const params = new URLSearchParams()

  params.append(process.env.clientContactFormNameField || "", body.name)
  params.append(process.env.clientContactFormPhoneField || "", body.phone)
  params.append(process.env.clientContactFormEmailField || "", body.email)
  params.append(process.env.clientContactFormCompanyField || "", body.company)
  params.append(process.env.clientContactFormProjectField || "", body.project)

  await fetch(formURL, {
    method: "POST",
    body: params,
  })

  return { success: true }
})