#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#


import sys

from airbyte_cdk.entrypoint import launch
from source_google_workspace_test1 import SourceGoogleWorkspaceTest1

if __name__ == "__main__":
    source = SourceGoogleWorkspaceTest1()
    launch(source, sys.argv[1:])
