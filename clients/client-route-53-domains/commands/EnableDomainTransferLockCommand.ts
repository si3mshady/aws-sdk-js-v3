import {
  Route53DomainsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../Route53DomainsClient";
import {
  EnableDomainTransferLockRequest,
  EnableDomainTransferLockResponse
} from "../models/index";
import {
  deserializeAws_json1_1EnableDomainTransferLockCommand,
  serializeAws_json1_1EnableDomainTransferLockCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type EnableDomainTransferLockCommandInput = EnableDomainTransferLockRequest;
export type EnableDomainTransferLockCommandOutput = EnableDomainTransferLockResponse;

export class EnableDomainTransferLockCommand extends $Command<
  EnableDomainTransferLockCommandInput,
  EnableDomainTransferLockCommandOutput,
  Route53DomainsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableDomainTransferLockCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53DomainsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    EnableDomainTransferLockCommandInput,
    EnableDomainTransferLockCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableDomainTransferLockCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableDomainTransferLockCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<EnableDomainTransferLockCommandOutput> {
    return deserializeAws_json1_1EnableDomainTransferLockCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}