---
title: "(ALBERT) ALBERT: A Lite BERT for Self-supervised Learning of Language Representations"
tags: [architecture]
keywords: transformer, ALBERT, attention, lan, chen, goodman, gimpel, sharma, soricut, lan et al, 2019, google, google research, toyota, chicago, toyota technological institute at chicago
last_updated: July 2021
summary: "ALBERT introduces changes to BERT to lower the number of parameters."
sidebar: home_sidebar
permalink: albert.html
---

[PDF](https://arxiv.org/pdf/1909.11942.pdf)

[Papers with Code](https://paperswithcode.com/paper/albert-a-lite-bert-for-self-supervised)


> Lan Z, Chen M, Goodman S, Gimpel K, Sharma P, Soricut R. Albert: A lite bert for self-supervised learning of language representations. arXiv preprint arXiv:1909.11942. 2019 Sep 26.

## Summary

ALBERT modifies [BERT] by sharing parameters between layers and factorizing the embedding layer into two smaller matrices, as well as trading next sentence prediction (NSP) for sentence order prediction (SOP) due to findings from [Yang et al (XLNET)][XLNET] and [Liu et al (RoBERTa)][RoBERTa].

|Model Name.   |Parameters|Layers|Hidden|Embedding|
|--------------|----------|------|------|---------|
|ALBERT-base   |12M       |12    |768   |128      |
|ALBERT-large  |18M       |24    |1024  |128      |
|ALBERT-xlarge |60M       |24    |2048  |128      |
|ALBERT-xxlarge|235M      |12    |4096  |128      |

Note that, due to parameter sharing in ALBERT, the number of parameters is separate from the effective computation cost; it affects only memory requirements.

Formula used to calculate compute parameters:

$$ V \times E + E \times H + L \times (4 \times H^2 + 2 \times 4H^2) + H^2$$

Where $V$, $E$, $H$ and $L$ represent the Vocab size, Embedding size, Hidden size and Layer number respectively.

|Model         |Compute Parameters |Pretraining steps|Tokens per batch |Normalized computation cost (Parameters x steps x tokens per batch)|
|--------------|------------------:|-----------------|-----------------|------------------------------------------------------------------:|
|ALBERT-base   |$89 \times 10^6$   |$125,000$        |$4096 \times 512$|$2.333 \times 10^{19}$ |
|ALBERT-large  |$307 \times 10^6$  |$125,000$        |$4096 \times 512$|$8.048 \times 10^{19}$ |
|ALBERT-xlarge |$1216 \times 10^6$ |$125,000$        |$4096 \times 512$|$3.188 \times 10^{20}$ |
|ALBERT-xxlarge|$2437 \times 10^6$ |$125,000$        |$4096 \times 512$|$6.388 \times 10^{20}$ |

## Architecture Details

### Tokenization

Sentencepiece, vocab size 30000.

### Embeddings for multi-segment tasks

Standard

### Positional Encoding

Learnable Absolute Positional Embeddings.

### Attention Mechanism

Multi-head scaled dot-product attention.

## Training Details

### Pre-training Data

Wikipedia and BookCorpus.

As well as "The additional data used by [XLNET] and [RoBERTa]"

### Pre-training Method

**Masked Language Modelling:**
N-gram masking, maximum n-gram of three. Authors cite this to [Joshi et al 2019][Joshi et al 2019].

1. Choose 15% of tokens to mask according to N-gram masking distribution for contiguous tokens.
2. Of these chosen token blocks, replace 80% with special token \[MASK\], 10% with a random token from vocabulary, and 10% with the same token.
3. Train model to predict those tokens based on sentence presented to them via cross-entropy loss.

**Sentence Order Prediction:**
Reject NSP; replace with sentence order prediction.

1. Take two sentences next to each other
2. Make model predict their order

### Finetuning Data

SQuAD1.1, SQuAD2.0, MNLI, SST-2, RACE

### Finetuning Method

Hyperparameters:

| Dataset   | Learning Rate    | Batch Size | ALBERT Dropout Rate | Classifier Dropout Rate | Training Steps | Warmup Steps | Maximum Sequence Length |
|-----------|------------------|------------|---------------------|-------------------------|----------------|--------------|-----------|
| CoLA      |$1 \times 10^{-5}$| 16         | 0                   |        0.1              | 5336           | 320          | 512       |
| STS       |$2 \times 10^{-5}$| 16         | 0                   |        0.1              | 3598           | 214          | 512       |
| SST-2     |$1 \times 10^{-5}$| 32         | 0                   |        0.1              | 20935          | 1256         | 512       |
| MNLI      |$3 \times 10^{-5}$| 128        | 0                   |        0.1              | 10000          | 1000         | 512       |
| QNLI      |$1 \times 10^{-5}$| 32         | 0                   |        0.1              | 33112          | 1986         | 512       |
| QQP       |$5 \times 10^{-5}$| 128        | 0.1                 |        0.1              | 14000          | 1000         | 512       |
| RTE       |$3 \times 10^{-5}$| 32         | 0.1                 |        0.1              | 800            | 200          | 512       |
| MRPC      |$2 \times 10^{-5}$| 32         | 0                   |        0.1              | 800            | 200          | 512       |
| WNLI      |$2 \times 10^{-5}$| 16         | 0.1                 |        0.1              | 2000           | 250          | 512       |
| SQuAD v1.1|$5 \times 10^{-5}$| 48         | 0                   |        0.1              | 3649           | 365          | 384       |
| SQuAD v2.0|$3 \times 10^{-5}$| 48         | 0                   |        0.1              | 8144           | 814          | 512       |
| RACE      |$2 \times 10^{-5}$| 32         | 0.1                 |        0.1              | 12000          | 1000         | 512       |

Note there is a large range of hyperparameters that have been tested and optimised here. Reportedly these hyperparameters were inspired by BERT, XLNET and RoBERTa hyperparameters, but the overlap is not clear. How much computation was put into hyperparameter search?

## Evaluation

Report Median Result over five runs.

### Evaluation Datasets

SQuAD1.1, SQuAD2.0, MNLI, SST-2, RACE

### Evaluation Results

|Model Name      | Average  | SQuAD1.1 | SQuAD2.0 | MNLI     | SST-2    | RACE     |
|----------------|----------|----------|----------|----------|----------|----------|
|ALBERT-base     |80.1      |89.3/82.3 | 80.0/77.1|81.6      |90.3      | 64.0     |
|ALBERT-large    |82.4      |90.6/83.9 | 82.3/79.4|83.5      |91.7      | 68.5     |
|ALBERT-xlarge   |85.5      |92.5/86.1 | 86.1/83.1|86.4      |92.4      | 74.8     |
|ALBERT-xxlarge  |91.0      |94.8/89.3 | 90.2/87.4|90.8      |96.9      | 86.5     |


## Author's Conclusions

* Although ALBERT has less parameters than BERT, it can easily be more computationally expensive. 
* Sparse Attention ([Child et al 2019]) and Block Attention ([Shen et al 2018]) should be investigated.
* Try efficient language modelling ([Yang et al 2019]) and Hard Example Mining ([Mikolov et al 2013]).
* Sentence order prediction is alright, but there may be many more self-supervised methods to try out.


[Mikolov et al 2013]: https://arxiv.org/abs/1310.4546
[Child et al 2019]: https://arxiv.org/abs/1904.10509
[Shen et al 2018]: https://arxiv.org/abs/1804.00857
[Joshi et al 2019]: https://arxiv.org/abs/1907.10529

[Yang et al 2019]: https://arxiv.org/abs/1906.08237
[XLNET]: https://arxiv.org/abs/1906.08237

[RoBERTa]: https://arxiv.org/abs/1907.11692
