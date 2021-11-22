"""
...
"""

# =============================================================================
# Local Library
# =============================================================================

from . import *

import time
import asyncio
import datetime

import API.ASGI

import API.Git.Imports

from API.ASGI.Authentication.Context import (
    Interface as Authentication
)

# =============================================================================
# Schema Reference
# =============================================================================

import API.Git.Lab.Schemas.Repository as Repository

import Utility.Color as Color

import urllib.response
import urllib.request

import urllib

import httpx

# =============================================================================
# API - HTTP Application Programming Interface
# =============================================================================

Colors = Color.TTY()

Request = API.Git.Imports.Request

async def getPages(Lock: asyncio.Semaphore):
    """ ...  """

    # --> Counter := 2
    await Lock.acquire()

    sys.stdout.write(
        Colors.violet(
            "%s" % "[Nexus-API]"
        ) + ": " + Colors.italic("(Semaphore) ") +
        Colors.bold(Colors.green("Acquired (2)"))
        + Colors.normalized("\n")
    );
    sys.stdout.flush()

    page = 0
    model = None
    content = dict()

    try:
        # request = urllib.request.Request(
        #     "https://gitlab.mycapstone.com"
        #         + "/api/v4/projects",
        #     headers = {
        #         "Authorization": "Bearer {0}".format(
        #             API.Git.Base.Lab.Default
        #         )
        #     }
        # )

        async with httpx.AsyncClient(http2 = True) as client:
            response: httpx.Client = await client.post(
                "https://gitlab.mycapstone.com"
                    + "/api/v4/projects",
                headers = {
                    "Authorization": "Bearer {0}".format(
                        API.Git.Base.Lab.Default
                    )
                }
            )

            content[page] = response.read().decode("UTF-8")

        #
        # response = urllib.request.urlopen(request)
        # content[page] = (JSON.loads(response.read().decode("UTF-8")))
        #
        # while page < Integer(response.headers["X-Total-Pages"]):
        #     page += 1
        #     request = urllib.request.Request(
        #         "https://gitlab.mycapstone.com"
        #             + "/api/v4/projects?"
        #         + "page={0}".format(page),
        #         headers = {
        #             "Authorization": "Bearer {0}".format(
        #                 API.Git.Base.Lab.Default
        #             )
        #         }
        #     )
        #
        #     response = urllib.request.urlopen(request, timeout = 30.0)
        #     index = JSON.loads(response.read().decode("UTF-8"))
        #     content[page] = index

        while page < Integer(response.headers["X-Total-Pages"]):
            page += 1

            async with httpx.AsyncClient(http2 = True) as client:
                response: httpx.Client = await client.post(
                    "https://gitlab.mycapstone.com"
                        + "/api/v4/projects?"
                    + "page={0}".format(page),
                    headers = {
                        "Authorization": "Bearer {0}".format(
                            API.Git.Base.Lab.Default
                        )
                    }
                )

                content[page] = response.post().json()


        model = Repository.Pages(Response = content).Response

    except Exception as Error: print(Error)
    finally: # --> Counter := 1
        Lock.release()

        sys.stdout.write(
            Colors.violet(
                "%s" % "[Nexus-API]"
            ) + ": " + Colors.italic("(Semaphore) ") +
            Colors.bold(Colors.yellow("Released (1)"))
            + Colors.normalized("\n")
        );
        sys.stdout.flush()

    return model

async def getProjects():
    """ ...  """

    # --> Counter := 2
    # await Lock.acquire()

    # sys.stdout.write(
    #     Colors.violet(
    #         "%s" % "[Nexus-API]"
    #     ) + ": " + Colors.italic("(Semaphore) ") +
    #     Colors.bold(Colors.green("Acquired (2)"))
    #     + Colors.normalized("\n")
    # );
    # sys.stdout.flush()

    page = 0
    model = None
    content = []

    try:
        # request = urllib.request.Request(
        #     "https://gitlab.mycapstone.com"
        #         + "/api/v4/projects?private_token={0}".format("z3_p1ZmcHzpyoAACzRfG"),
        #     headers = {
        #         "PRIVATE-TOKEN": "{0}".format(
        #             "z3_p1ZmcHzpyoAACzRfG"
        #         ),
        #         "Sudo": "{0}".format("1")
        #     }
        # )
        #
        # print(request.headers)
        #

        Client = httpx.AsyncClient()
        req = await Client.get(
            "https://gitlab.mycapstone.com"
                + "/api/v4/projects?private_token={0}".format("z3_p1ZmcHzpyoAACzRfG")
        )

        print(req.json())

                # headers = {
                #     "Authorization": "Bearer {0}".format(
                #         API.Git.Base.Lab.Default
                #     )
                # }
            # )

            # print(response)
            #
            # content[page] = response.read().decode("UTF-8")
            # print(content)

        #
        response = urllib.request.urlopen(request)

        pprint.pprint(response.__dict__)
        print(response)
        content[page] = (JSON.loads(response.read().decode("UTF-8")))
        print(content[page])

        while page < Integer(response.headers["X-Total-Pages"]):
            page += 1
            request = urllib.request.Request(
                "https://gitlab.mycapstone.com"
                    + "/api/v4/projects?"
                + "page={0}".format(page),
                # headers = {
                #   "PRIVATE-TOKEN": "{0}".format(
                #         "z3_p1ZmcHzpyoAACzRfG"
                #     )
                # }
            )

            response = urllib.request.urlopen(request, timeout = 30.0)
            index = JSON.loads(response.read().decode("UTF-8"))
            content[page] = index

        # while page < Integer(response.headers["X-Total-Pages"]):
        #     page += 1
        #
        #     async with httpx.AsyncClient() as client:
        #         response: httpx.Client = await client.post(
        #             "https://gitlab.mycapstone.com"
        #                 + "/api/v4/projects?"
        #             + "page={0}".format(page),
        #             headers = {
        #                 "Authorization": "Bearer {0}".format(
        #                     API.Git.Base.Lab.Default
        #                 )
        #             }
        #         )
        #
        #         content[page] = response.post().json()

        model = content

    except Exception as Error: raise Error
    finally: # --> Counter := 1
        # Lock.release()

        sys.stdout.write(
            Colors.violet(
                "%s" % "[Nexus-API]"
            ) + ": " + Colors.italic("(Semaphore) ") +
            Colors.bold(Colors.yellow("Released (1)"))
            + Colors.normalized("\n")
        );
        sys.stdout.flush()

        return model

class HTTP(Request):
    """
    Application Programming Interface via HTTP(s)
    """

    Generator = Request.Generator(prefix = "{0}/{1}".format(Request.Prefix, "Gitlab"),
        tags = Request.Tags + ["Gitlab"])

    @staticmethod
    @Generator.get("/Pages",
        name = "Query Gitlab Repositories (Pages)",
        response_model = List[Optional[Dictionary[Integer, List[Repository.Project]]]],
        responses = Request.Responses
    )
    async def Pages(_ = Dependency(Authentication.Session)):
        sys.stdout.write(
            Colors.violet(
                "%s" % "[Nexus-API]"
            ) + ": " + Colors.italic("(Semaphore) ") + "Creating Lock ..."
            + Colors.normalized("\n")
        );
        sys.stdout.flush()

        # --> Counter := 0
        # Internal = asyncio.Semaphore(0)

        sys.stdout.write(
            Colors.violet(
                "%s" % "[Nexus-API]"
            ) + ": " + Colors.italic("(Semaphore) ") + Colors.bold("Initialized ...")
            + Colors.normalized("\n")
        );
        sys.stdout.flush()

        # --> Counter := 1
        # await Internal.acquire()

        sys.stdout.write(
            Colors.violet(
                "%s" % "[Nexus-API]"
            ) + ": " + Colors.italic("(Semaphore) ") +
            Colors.bold(Colors.green("Acquired (1)"))
            + Colors.normalized("\n")
        );
        sys.stdout.flush()

        # Data: Repository.Pages = await getPages(Internal)
        Data: Repository.Pages = await getPages()

        # --> Counter := 0
        # Internal.release()

        sys.stdout.write(
            Colors.violet(
                "%s" % "[Nexus-API]"
            ) + ": " + Colors.italic("(Semaphore) ") +
            Colors.bold(Colors.green("Released (0)"))
            + Colors.normalized("\n")
        );
        sys.stdout.flush()

        return Data.Response

    @staticmethod
    @Generator.get("/Projects",
        name = "Query Gitlab Repositories (Projects)",
        response_model = List[Optional[List[Repository.Project]]],
        responses = Request.Responses
    )
    async def Projects():
        Data = []

        sys.stdout.write(
            Colors.violet(
                "%s" % "[Nexus-API]"
            ) + ": " + Colors.italic("(Semaphore) ") + "Creating Lock ..."
            + Colors.normalized("\n")
        );
        sys.stdout.flush()

        # --> Counter := 0
        # Internal = asyncio.Semaphore()

        sys.stdout.write(
            Colors.violet(
                "%s" % "[Nexus-API]"
            ) + ": " + Colors.italic("(Semaphore) ") + Colors.bold("Initialized ...")
            + Colors.normalized("\n")
        );
        sys.stdout.flush()

        # --> Counter := 1
        # await Internal.acquire()

        sys.stdout.write(
            Colors.violet(
                "%s" % "[Nexus-API]"
            ) + ": " + Colors.italic("(Semaphore) ") +
            Colors.bold(Colors.green("Acquired (1)"))
            + Colors.normalized("\n")
        );
        sys.stdout.flush()

        try:
            Client = httpx.AsyncClient()
            Request = await Client.get(
                "https://gitlab.mycapstone.com"
                    + "/api/v4/projects?private_token={0}".format(API.Git.Base.Lab.Default)
            )

            Current = int(Request.headers.get("x-page"))
            Total = int(Request.headers.get("x-total-pages"))

            Data = []

            for Page in range(Current, Total):
                Request = await Client.get(
                    "https://gitlab.mycapstone.com"
                        + "/api/v4/projects?private_token={0}&page={1}".format(API.Git.Base.Lab.Default, Page)
                )

                Data.append(Request.json())

        except Exception as Error:
            sys.stdout.write(
                Colors.red(
                    "%s" % "[Nexus-API]"
                ) + ": " + Colors.italic("(Error) ") +
                Colors.bold(Colors.yellow(Error))
                + Colors.normalized("\n")
            );
            sys.stdout.flush()

            raise Error
        finally:
            # --> Counter := 0
            # Internal.release()
            await Client.aclose()

            sys.stdout.write(
                Colors.violet(
                    "%s" % "[Nexus-API]"
                ) + ": " + Colors.italic("(Semaphore) ") +
                Colors.bold(Colors.green("Released (0)"))
                + Colors.normalized("\n")
            );
            sys.stdout.flush()

            return Data

API.ASGI.Application.API.include_router(HTTP.Generator)

__all__ = ["HTTP"]
