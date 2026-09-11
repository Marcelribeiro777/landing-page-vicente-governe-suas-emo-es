import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import {
  ShieldCheck,
  ArrowRight,
  Github,
  Chrome,
  Lock,
  Mail,
  Loader2,
  Sparkles,
} from 'lucide-react'

interface SignInModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultTab?: 'signin' | 'signup'
  onSuccess?: () => void
}

export function SignInModal({
  open,
  onOpenChange,
  defaultTab = 'signin',
  onSuccess,
}: SignInModalProps) {
  const [tab, setTab] = useState<'signin' | 'signup'>(defaultTab)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string; fullName?: string }>({})
  const { toast } = useToast()

  const validate = () => {
    const errs: { email?: string; password?: string; fullName?: string } = {}
    if (!email) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email address'
    }

    if (!password) {
      errs.password = 'Password is required'
    } else if (password.length < 6) {
      errs.password = 'Password must be at least 6 characters'
    }

    if (tab === 'signup' && !fullName.trim()) {
      errs.fullName = 'Please enter your full name'
    }

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast({
        title: tab === 'signin' ? 'Welcome back!' : 'Account created successfully!',
        description:
          tab === 'signin'
            ? `Signed in as ${email}. Your 360° analytics workspace is ready.`
            : `Confirmation sent to ${email}. You have 14 days of full Pro access.`,
      })
      onOpenChange(false)
      setEmail('')
      setPassword('')
      setFullName('')
      if (onSuccess) onSuccess()
    }, 900)
  }

  const handleOAuthLogin = (provider: string) => {
    toast({
      title: `Connecting with ${provider}...`,
      description: 'Redirecting to single sign-on authentication portal.',
    })
    setTimeout(() => {
      toast({
        title: 'Authentication Successful',
        description: `Welcome to OmniScope 360° via ${provider}.`,
      })
      onOpenChange(false)
    }, 1200)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl">
        <div className="p-6 pb-2 text-center border-b border-slate-100 dark:border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-3 shadow-md shadow-indigo-600/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <DialogTitle className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {tab === 'signin' ? 'Welcome back to OmniScope' : 'Start your 14-day free trial'}
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {tab === 'signin'
              ? 'Access your 360° page intelligence dashboard and live diagnostics.'
              : 'Continuous audits, conversion insights, and real-time alerts.'}
          </DialogDescription>

          {/* Toggle Switch */}
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg mt-4 max-w-xs mx-auto">
            <button
              type="button"
              onClick={() => {
                setTab('signin')
                setErrors({})
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                tab === 'signin'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setTab('signup')
                setErrors({})
              }}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-md transition-all ${
                tab === 'signup'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Social login */}
          <div className="grid grid-cols-2 gap-2.5">
            <Button
              type="button"
              variant="outline"
              className="w-full flex items-center justify-center gap-2 text-xs font-medium border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
              onClick={() => handleOAuthLogin('Google')}
            >
              <Chrome className="w-4 h-4 text-red-500" /> Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full flex items-center justify-center gap-2 text-xs font-medium border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800"
              onClick={() => handleOAuthLogin('GitHub')}
            >
              <Github className="w-4 h-4" /> GitHub
            </Button>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 dark:border-slate-800 w-full" />
            <span className="bg-white dark:bg-slate-900 px-3 text-xs text-slate-400 uppercase tracking-wider shrink-0 font-medium">
              or continue with email
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {tab === 'signup' && (
              <div className="space-y-1">
                <Label
                  htmlFor="fullname"
                  className="text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  Full Name
                </Label>
                <Input
                  id="fullname"
                  placeholder="Alex Rivera"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`h-9 text-sm ${errors.fullName ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-500 font-medium">{errors.fullName}</p>
                )}
              </div>
            )}

            <div className="space-y-1">
              <Label
                htmlFor="email"
                className="text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                Work Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="alex@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`pl-9 h-9 text-sm ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                />
              </div>
              {errors.email && (
                <p className="text-[11px] text-red-500 font-medium">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-xs font-medium text-slate-700 dark:text-slate-300"
                >
                  Password
                </Label>
                {tab === 'signin' && (
                  <button
                    type="button"
                    onClick={() =>
                      toast({
                        title: 'Password reset link sent',
                        description: 'Please check your email inbox to reset your password.',
                      })
                    }
                    className="text-[11px] text-indigo-600 hover:text-indigo-500 font-medium"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`pl-9 h-9 text-sm ${errors.password ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                />
              </div>
              {errors.password && (
                <p className="text-[11px] text-red-500 font-medium">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-10 mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md shadow-indigo-600/20 flex items-center justify-center gap-1.5"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-1" />
                  Processing...
                </>
              ) : (
                <>
                  {tab === 'signin' ? 'Sign In to Workspace' : 'Create Free Account'}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </form>

          <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Bank-grade 256-bit SSL encryption & SOC2 Type II compliance</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
