import { Button } from '@/components/ui/button'

const UnauthorizedPage = () => {
  return (
    <div className="h-full center stack gap-3 p-3 text-center">
      <p>You do not have access to this application. Please request access</p>
      <a href="mailTo:aiacuone@gmail.com?subject=7 Headington Rd Application Access Request&body=I am requesting access to the 7 Headington Rd Application">
        <Button>Request Access</Button>
      </a>
      <p>Once access has been granted, please refresh</p>
    </div>
  )
}

export default UnauthorizedPage
