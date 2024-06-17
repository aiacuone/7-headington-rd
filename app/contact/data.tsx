const ContactContent = () => {
  return (
    <p>
      If there are any issues with this application, please contact{' '}
      <a href="mailTo:aiacuone@gmail.com?subject=7 Headington Rd Application Issues">
        here
      </a>
    </p>
  )
}

export const contactTabs = [
  {
    label: 'Application Issues',
    content: <ContactContent />,
  },
]
