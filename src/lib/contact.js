export function createContactDraft({ name, email, projectType, message }, recipient) {
  const subject = projectType
    ? `Portfolio inquiry: ${projectType}`
    : "Portfolio inquiry";
  const body = [
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    ...(projectType ? [`Topic: ${projectType}`] : []),
    "",
    message.trim(),
  ].join("\n");

  return {
    body,
    href: `${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
