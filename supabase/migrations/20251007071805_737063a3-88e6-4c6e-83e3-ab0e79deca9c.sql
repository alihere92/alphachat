-- Make user_id required for contact submissions to prevent anonymous data exposure
ALTER TABLE public.contact_submissions 
ALTER COLUMN user_id SET NOT NULL;

-- Add comment explaining the security requirement
COMMENT ON COLUMN public.contact_submissions.user_id IS 
'Required: All contact submissions must be tied to an authenticated user for proper access control and data protection';