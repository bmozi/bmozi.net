# Local Secrets

Do not commit secret values to this repository.

Cloudflare DNS continuity for `bmozi.net` uses a local env file:

```bash
source ~/.config/bmozi/cloudflare.env
```

Expected variables:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ZONE_ID`
- `CLOUDFLARE_ZONE_NAME`

The local file is outside the repo and should stay permissioned as `600`.
