"use strict";
/*
--- Day 3: Rucksack Reorganization ---
One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey. Unfortunately,
that Elf didn't quite follow the packing instructions, and so a few items now need to be rearranged.

Each rucksack has two large compartments. All items of a given type are meant to go into exactly one of the two compartments.
The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.

The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need your help finding the errors.
Every item type is identified by a single lowercase or uppercase letter (that is, a and A refer to different types of items).

The list of items for each rucksack is given as characters all on a single line.
A given rucksack always has the same number of items in each of its two compartments,
so the first half of the characters represent items in the first compartment,
while the second half of the characters represent items in the second compartment.

For example, suppose you have the following list of contents from six rucksacks:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp, which means its first compartment contains the items vJrwpWtwJgWr,
while the second compartment contains the items hcsFMMfFFhFp. The only item type that appears in both compartments is lowercase p.
The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL. The only item type that appears in both compartments is uppercase L.
The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
The fourth rucksack's compartments only share item type v.
The fifth rucksack's compartments only share item type t.
The sixth rucksack's compartments only share item type s.
To help prioritize item rearrangement, every item type can be converted to a priority:

Lowercase item types a through z have priorities 1 through 26.
Uppercase item types A through Z have priorities 27 through 52.
In the above example, the priority of the item type that appears in both compartments of each rucksack is
16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.

Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?

--- Part Two ---
As you finish identifying the misplaced items, the Elves come to you with another issue.

For safety, the Elves are divided into groups of three. Every Elf carries a badge that identifies their group.
For efficiency, within each group of three Elves, the badge is the only item type carried by all three Elves.
That is, if a group's badge is item type B, then all three Elves will have item type B somewhere in their rucksack,
and at most two of the Elves will be carrying any other item type.

The problem is that someone forgot to put this year's updated authenticity sticker on the badges.
All of the badges need to be pulled out of the rucksacks so the new authenticity stickers can be attached.

Additionally, nobody wrote down which item type corresponds to each group's badges.
The only way to tell which item type is the right one is by finding the one item type that is common between all three Elves in each group.

Every set of three lines in your list corresponds to a single group, but each group can have a different badge item type.
So, in the above example, the first group's rucksacks are the first three lines:

vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
And the second group's rucksacks are the next three lines:

wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
In the first group, the only item type that appears in all three rucksacks is lowercase r; this must be their badges.
In the second group, their badge item type must be Z.

Priorities for these items must still be found to organize the sticker attachment efforts:
here, they are 18 (r) for the first group and 52 (Z) for the second group. The sum of these is 70.

Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types?

*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.part2 = exports.part1 = void 0;
function default_1(input) {
    var part1 = exports.part1(input);
    var part2 = exports.part2(input);
    console.log("Sum of items : ".concat(part1));
    console.log("Sum of typed items : ".concat(part2));
}
exports.default = default_1;
function part1(input) {
    var sumPriorities = 0;
    input.forEach(function (line) {
        var firstPart = line.substring(0, line.length / 2);
        var secondPart = line.substring(line.length / 2);
        var item = firstPart
            .split("")
            .find(function (item) { return secondPart.includes(item); });
        if (item)
            sumPriorities += score(item);
    });
    return sumPriorities;
}
exports.part1 = part1;
function part2(input) {
    var sumPrioritiesTyped = 0;
    var lineIndex = 0;
    while (lineIndex < input.length) {
        for (var i = 0; i < input[lineIndex].length; i++) {
            if (input[lineIndex + 1].includes(input[lineIndex][i]) && input[lineIndex + 2].includes(input[lineIndex][i])) {
                sumPrioritiesTyped += score(input[lineIndex][i]);
                break;
            }
        }
        lineIndex += 3;
    }
    return sumPrioritiesTyped;
}
exports.part2 = part2;
function score(letter) {
    var sumItem = parseInt(letter, 36) - 9;
    if (/^[A-Z]*$/.test(letter))
        sumItem += 26;
    return sumItem;
}

exports.default(["fzmmmfwDWFzlQQqjCQjDGnqq","tJHJvLJVVttNsvTtTvgHHSVwCsQRQQZCZZMqQMQBnqBMQs","LgThNJhNSgTJVgvgtghPhbpfWzfbwfPmpprb","lDLnSnLZRjmWrlhrFF","PffQJNqJbPZbpmjrrCVNFmCh","qzbcbqfMfZMTfQTqqzzTPPLMHgBBBtHRStvgHRDBnSRL","WPZfJlZZCMwwZPWCwWzVHQhsshVSsfNQHdvQNN","FLGDGGnGdVjQQQDQ","ccFFbggLnRcLFRtFBmnJzdZZzZBMpwJlZMppMp","RZsnCZssCnDccJCnfcQfHTdzMzhdLdMTqdRqpRLwqq","tNrGNrrvGhTThQqw","rrFStPgrFWWgvmPgQjtmNtmJcfJcsJsZblDZfbfHDFHnfl","RdTfgbbPbJWDDqRvsDsmVG","NSQZLQZHpFGLqnLszrJm","ZMSNMHhNZMMSQwhQJWPBJCbhbcgtgfcJ","qZfqPvLnnZGpGpCJlvsMsMlHJJHB","mTWFFFTTtVSJMzzjWgSH","RbVdtdFtcrmbRQDDVHDQTbDNwLPLfnqZnhZhQnNwfNqnnn","nhHfSGHGThhZjnhrrSnsSczdzlfzzdQQVzRNFNcFdl","JJvCDvmCbtvpvbMmDvLbCJpmqdVVVcMcNGzRcNFcRRzRclQd","vwDCwtLmwLBDJmCHHjHHWGZHBnsnnj","QWTMqZhThbTbLwtGBrQfQQNr","jdzSSccVPPcgcLrDBtDVwCfNNC","vcBgcmssccplTnnTqsMhWW","FlcwZhBhGZhFJnGtZZFwlGsWRLHdWqMzPjWRLTLJHHjdWq","vfmrmbpfpMfzjHjfdM","VCSmVpmrNDMZhSMcsFnh","nHqQVtVZGGwwwnSF","fMBBBWCsCfMMbWfbsGmGzFjQGQFCPhFQhF","fbcsWpJRsWlcNVLtqtLLQcZQ","rgNJdfNJpgpJVMMVfmfVJgCtCTqqqzwTqrBsTswcCCss","lFLHGWLvHQFhnQFhbFnbHWWPBtwqzBPTcsPTswZCPBGCTC","QQtbRtLhtjgdfMRMDV","jTRhJpGhQPfPLsDhWh","wVVMbqbHwVwwMplHWfsfNmWcSLqcLmSs","lVCZlHnwHdRpRGvZTBGJ","csppppDDbGLbSqndFHHNdHsH","lVTlgWgjzCzfgvfggZWWlnHPPBHrSCqBmrSBrHHBnF","QFgvFfjTvZjzlvVTWljvTtMbLcccbRRMbwLMMLQLbw","tjhLjLJzpJpwjsqqfQqNrNfRnsRR","WvwGBPwWZZrnbBNrNnnC","PDvGVTgvTMGvZTGTPvWDZVJjljtLzhtmLlJjwJVJLm","WbzpSNswNWszwSLgSNMcrrBfPJJcfsHMrvMv","CFllhlGFDVFRCmhQDlDTBBcvgBCTcHPHrfrHTJ","qGRgVFhDDZmDnDqhgQFGqzwtzSjddwZbzwpLNzjpdS","FlpZrQSJJmQpSpqlQgbbRZCgGCZdDdbNdd","WswHfjfnhWPFDsFRDcbBbR","WjHvjjWTfTvHFjzvPnPtttVTTJVLtJSpmtlltp","tnjrnnnnhNlPBtbbcWpZScpjbZSz","wmsFqfqqqGHTLbzpLLbgzMcH","FGJqsmQGRVFwwQJschPdhPrBndBhtPhrQQ","dRdJRfTnCRNlJjPBDmBJsbBDzm","wSFWSgGVSLwpFhpLhQjzgPzbtDPDbPBsztrP","WMGvVMLLBCclNHHRlM","gfSffQBDBtZvwwpWDHcbwb","JnCmmJCRmztsVPJRFjFchcGGWFWcGcHFvGLvHF","VCPzJnsPVCjtPjdMsMdmVmMBfgTZBTMfSfZSSlfNNgSSfg","lwHJSVZHWWVwJQwbbVVtwWVVdpdPfRfgDLPZLTZLDLgRDTZL","hhBrBqRcnhsFFfddmdmmCmmppn","MNNBBRRshNHbtVMzQJMM","NBsSNtLNTtNsvlTBBRLgFSCbFmbHFCFhgcghSm","WJWWDdVzDZJjDJQcCDHmmhCnmHmHFm","zQVdQZQwqVQHjqzWWWdHpzMwGMBlGLLtTvRvRNsMwwNN","ZCztttSjGSqRZgRPDNQQNr","hLvmHshLmLcFwwhhwLqMVRRRJQQVNnRJMVRDNNRr","HFhTpFqqLcssmqmFftblBSjCjStjbGWBfj","crffjHDfrQfnfpLPgbgP","TmFvFCmFTFFCtNsmMsRvlRTpPbLGMnGSngPppShGpbdgGJ","vmslmwTNmtstzFsCvRFrHBrDZzcQnWqcDDHqQB","LQLPVLGdGrRPRhHgwMhllhhs","ZbSZTNqSZfNqNCtSSmTttbpSWMlzWlslpWHsWgJWhwJzBMlz","bqjqqFFjHqTTTZTmSNbfmdrFQnDdcvVDGQDvvVnQnr","mQdcdsSThlccSWhMgDnQnFtjQPtnjPNvtR","zzsGwzrrHGBfZJGrJpDtNHFjvNvDvVRvNRtV","wZBCGrbrszTbThcTcLcb","gJDDDDcPQgQfNFPhhZGDDcZZSLVtlCqzsMlzqpszlsVtFSql","bBrdwHTrHWTrTtzLlSMCCCprCq","dnBwRvmnbmBvTpbnbWbTjZPQJhhchmJcmcQPfmGNcJ","sjMGBLWGZjsLjJTBCCbvNrBCHC","mpcRfDSSdqDdlRqdwRvFrHFbrHJFJVvDVrTb","qvlgqwpcSQSfLjjhzgnMzsnP","VgmLHHNRNVLNhsNgRHLltjjbCWnCWZbldntW","GGMFPJqPwJGTvvCCdqdqlqCj","rGwGrMQzJQBjJwTVHgDQDHcsfhVhVg","pblwGBlFlWwwlgCSFwbLvQZFvzvZhzvmQTLLzJ","HfqccHzVDNqLmmPmPPQZ","MNtrVdDjHtrzGBdbGWCblw","NNhnnLdnnfhdhVjvThvqVvCj","tHtHBzBGWHBWGtPBSvvpGZVbSsTFjSqqVbscgjCjqqSC","HBtzJHzzpDZpzMWpGPtWHvZwQmNLlmQnmNdfMmNRmwmlwd","QzGqGwmbfTdPBgRRcgmMPC","NtNZhljrNjrSrtltWlCJCJJfcVVRcJcRgPjf","NlWSZZWsHhWWlprSSvZWHrWfQLLQbLGfQpQzzTFQbwzQdd","gcwcSnccnwLRRSzcBQRvZZdvtNtvRbQJQv","CqrCrrPsVstvbfDfbb","TPlPVhWFFMGMnMjbcT","gjjHGvcHgsgbSRQbRFWbjC","ttnBTNSSfwBLzplWPPdlLlMPlMCQ","TBZpDtmnnZNvhJDHggqqgS","zfqzzGwMbllcJFqm","NpHgpRZrRpSrSZLghlTjchNlNbhFmchb","RHLWHgLBggZpHpgHRZrLgZLQCMzCfDWGMCzMQQGvPmvvfC","bBWWlFFBBFdVMLfvsfjrtBvTrr","qZsgNZzcwfjZrfPf","gcnNNcDncsDGzggDnNRJnzHhmlMVSSbhVVVmMbbhVmMlGl","dNNRQszqRhPNfddWltvDltMMNlnncv","ZjZbpgpSpjpJgpCCpbFlTnSDTlzclDnMvnnMlT","GCJpjbgzJCpwZwrHZrgHsRBwBVRRsqdqPhLBQqsP","mnnVCcwGwnsVJntmfnBtBhTDzpzzpDWbDbsLLzpWDz","FcHQdZSRHbhZZWWhrW","dNljMlPPHdMPvRlHMRdjRRNBnwJfCVqwqqffCfCwtcBV","ZGtGzBBGjvdZvLWLcrPVcZcsNVNmVpcH","MnlgngCJMgJbhfDbCDPrHHVcNNrVpbVpVmmcVq","lSPhlClftSSBvdGS","jFhGqVCcPMMdGFqczBltzrtglrsrjBgB","wWgwvfDZvnpmnHwHTfNpDbtRWbzltRlSrRlbBSbbzt","fHJvJvvTwwJPhCccgQCM","BrrrBVgNppDVBbTgDvqWdWZqWqwNmNNHvH","sHsHnHlcJjFwMMFFvGdPvv","HllCQCJQJsnjgtVTbBgpQrSr","JgLPLwbhBrCbLBCJPFFlPFZRTNTZFRqlRq","pmffSWvDcfSfGmvsNHZsTRsWllssbT","vDddMmScdStfzGcpzzwhJwJwnCbLwwLLCwht","sWSSvmsZsdZPWdLPRRsmSrrnlnvJjfnggfrgtfjnjr","VWWWBhhHBBHtljMMfJHrrt","WWqpWVqQqLNGRNZP","QHjjGVBQpffpjqppQsSsQHWJcVVgJFWcFTWgNLggFPNc","bzzmbzzZnZztFTNJWRqmqcgJ","zDZlqMtbwhCBBfppvHDGvf","BNTdfWJmzHNHHzzTdLCfCfCswQjRjljVsh","FbGnrFnrPGSSvGPFZFFPGClLQpjQRwLjLplQhRlsrQ","GbnvvgvPFwbwcnZMMGSFvFHdNHmTBNJNmmmDTJDBmWcT","rBhRPrjJrRtTHtWHWcjc","SDdGqmhdFSqblLGlHHfHWl","DSSmFqhsFqFdzqFgwsVnvBQPPQPQVrnRsJMR","NZcgQdmSwZgdPFPVNFPqqVVF","hlhhjMhGjLhLDGDhCBJDCrRFRrqqpLPfpfPRVPprPm","MlhjlMDDJTCmZddQQSTcTT","zRddrwzwNhrzrtCLtLfsLrqflC","MbSDZvVwGZpJwvHvBVfsqtjqlsPPfsqsfclb","vJpvJvZTVgTdTgwdTn","SZMsTTScDMqwtDDJ","VWrbzFvnrvFQQtnhzdPFmfwGfqmGPfDwmfPJ","rrLbrnVrLvVQpLHSHjsTBBjZBt","bSrpbWpPpfzPRWrWvhJgddrcccgFnFss","ljGNTCtMNLGQjNMjQMGtZJDDggcldcFcvhdFddnhhF","vNCmQMjmvGzpRPPzzmfw","BrbdcqcdSZRLQltNDqFpCpHH","jnTzWsWjWjwTQnzMvFlCzNDhNhDCFGpHpH","wmmvjVQMvwmsQMMwnsTPgVfgJcLcgfSbbBdBbJSdbSBS","bJFbMdcmgFSFgmggJFcGwjRdzPWZWGDDGGRwGD","hrttffCVVCTVlrttQwzRzwWTqRGDGwjTvG","rfLChHhlpHrfHlnWlpWCpQVcMSmMmSJMmggbmMSMLFNSSs","JRMBJfMJQJTcNNdD","LHsLmspghmmpdwwwcwRCpPTT","ttLLlRSlqjrMqFtZ","VjtHVHtvVqttCdnGpHtplcshglNgprrlMhrcNghw","WTWRvRWFZQLWDvDWzwscNfcflcshlshFlw","WQmBQWPTVGnJPnvn","cpRwjcQwVfQzQPQl","BZgGDBZBsgWBDDJzlhfhJVmzVfmThm","FqWDDGrGDFNqFrDZFnplNHnSwtnSRwRplN","VMLVRhRLRfhfgGdfVdZWRdTHNqHCDTrSJNBBBgJNQgND","swlcpsFPcPwzpSlTTDrNrQPQqQBBrH","zsppFscsscmbzsFsbsZbMfRZdVdVMbVSWhLG","NjcjHFjrHHFpjGtVtGWVZW","fwPlsJqdndPnwJfQdfllwNtWGdtWMMbtbmbGWbMWGN","CPlwnCwnwqClTJThTDzzFcHNSShrRh","llqlsNsPNTpDNTDNNf","cnvcWFjSrMSFnvWHTzTggHCcllzLpg","wjJSSrFrrMMJGrFFFGjGvJnFswsRwRdmBdZbbqqsPtQqPZls","jlclpqjcRqpjzjnVPgTmBmjCrC","vGvsFNGGMZNvdGshQNJvJgbVMrnbrHVBgBTTbBBPBT","SvJNGhvvvFdfQvFshSpqPqLzRRPctRcLWwlf","LWSSqLVBbNqqLrWHLSHzWbbqQfFgZtmtJCQZzgtCFCQCCnJQ","PlldGDGdjGsMPhssjPmQZFJQQZQghChZQJgv","jwMcMpsPRRdsRjPwNpTWBLSBqVqTNJWT","hWnMWgTffWFbMLfHnFMNfHgjtBSNRzjBBSzSBBcStdzBtz","VGrVCGcVJswvPqJQjtQppBzpSwdjpt","ZqqsCrmmsfmWcHhngg","vnNnssMcZnlnlMFMsnFcZMGqJCbLbNLNqgLbgLNTCpLgwC","hmjzBzHmRSfBfmqgQwpQQJbQJmwT","WVVtthRtRdsdqtddZd","LhZBLfZpmcsFpFzm","vTRRwTRRPnCTwlFgmsczzLmgLvFs","HVVVNCPPHTTtClRVNSnwLTHSQHBMMHrHWBhrQbJhWMMbZbJZ","WPTnnDPjvPlChhJPcgCC","DRQdBqsDQHQLHsBSmVLBcbwgCClbgCGlJghgmhgw","dHMHQDVVRBsMWTNfWfzWzf","PlgFPFFJGgJhhMGZwGbpBtQjjjStBttptlSb","TTcDzmHvdvnDDzdTVnTDmSspWspQLpWmSsmqppsWtb","CHVdcHvdbrwJCMPRGJwP","BtBfcPfBhBGDhwHMlCmrNSCM","dQdzLFTQnRnQVvgLnNlrCCpFrJCNrHJrwm","zRVLZQRRvQGbwtWfbGZb","PPcWcwMmCwwgnphCCLpjHp","TtZsJTzzJSSSZJsdJtTrpblhRlHHHMngpLnnjHps","ZDrvdFZtJqtStrZfMcGDVwfwffmWmP","wCwSzzsHChhMVMhCPsSVLFWcdcWGPccRdjFdJjDR","wBTTlBfgTlfpQQltmfgGGctRdGJJJFDJDDWdDt","TppwnmlnQQqnlpqlmmwqlpphHqrVrZZSzshzShqzsrZVqs","CCqCTgmdMCCCMMsWgqqnTCmJDGJcGGJfrGNGrSrrQpwFFSwG","vZbDZvhDbzHzwNzwNGFNpNGc","ZjBRVHPRtRLjLMWsCDlmgMdBmW","MMsstRChwbChqRBqDrJNpNDsHdlNlJdr","vLmPLfGGGGcTmFfTSgvPCvpZQlHHZpdrFJplQdZHQdHH","GgPLmvGVSPfmfcfgBtjwCRwwjBbtVWbh","LPPgFPccLPRswfsHfJgDsH","bpbpTnCCrnmCtjBnTfDshHDwQVTwsDhQ","BbrjnjnWCbBWZbPWzLDzDWdNlMWS","pnncvLbcppBHgBRpddGd","MtJfjVMtMmFJDjWSjVWzGdGgNQRBzBGNBMCGNB","ZdDdsJFdDmtJmLTbwcvcbcnwZv","FGsfFdNdhfbDdbhbLMhbNNTPJVCCZTLJnCRVJLPCRTVR","qHjsczptHpmgHZBBVVTrrPzrBP","lmpSlcglQtqWtcWjpQQfWsGDMhGFwdbGGNWhDv","hNNNjMFMwthjFfvZBjFFvNSdnzSGGdGmHzHgGWSfHWSR","ppJpcCVslpQJpJJDWHCHmRHHWWGSDn","QbsrJQTQJVJNMNnZTZNZvZ","NmRNLtGNmfcRrtDtrJCnWHJD","blSzzSBssgfslWCCCJWFWHrsZF","zTzbPBhMlTVSzMlMldlgMvvvvMLGcQRmqLLfvRwQ","nnZsfsPLLfZfHLWdsZWZHdmcSpTcGmNScJTRGsTJmNcF","gqVqDMgBlDbwwCqVbQFpTNFcTRSJNSrqqTSm","jlMVMjljQBjMwhLfWWzhhfhZtmLH","bfHwMvzwFBNpRjfZ","nddcVJpGVpGqPVBBFBmhBhmsNRJs","DWcPgPcPgnqCPlWWVWGMwbzwvQSSLbvgLpHHMz","NMVqtdPVHgVlrfVrpnjCwNjjpCpNNpCb","zhSvfWWzRfRLfvSpQjwbmmmvQvwwCD","LBRRTRcLJSgqqMJlVVft","GpgNzzSMGpGTrgzgMzJTrPgzjRwBdBlBbLRBjdBwVbLRVbSR","sQWCfQcflhtQQcWCmsmlsbLnRdwqqBmmbBVbLVLwnB","fCtQWFWDZFCQhCctFDsftNpzPPzZJpgJJNTgNlPZgH","DqLtMSDLLttjdDSRdjZtdpdqVWFslFWrqWPqhwhfFwwCFw","CvTbNvvTJNGHnVJwPfwFFFwsrh","cQBzGBHnTQGgcNtdMMBpDBtCdtLL","QsNDfdDNQsSTtrQZQtJJZC","lLvRWMVMLzWbRjvVgVVGvmTtCrZBrTFFbmJCmsBCrr","lljvlgpMGgRpsjsRlGGsMdqDdpDqNqfhqqSdncpqdP","sVSJVmmtmsCCwschrbNMbcBs","ZgLLfqvzzqgfdqHQLnTLfQQFhFMrhbNGBwgGbMlNcFclwN","LTzqZrHHQvjLHnHdQTdTQvZQJjCpCJDPmCRRtCpStRRmVtmm","ccQVcVHwnnDqNqSWNnVvqwcgJblgRslgmdGlssmGbQdddb","rpFtPrzrMFZvZTLPpglhdssFshssJhsggG","pTtLtBMjZLfHvNWqcBHf","PZnSjnnsVfjfLLff","crvccpglrtHfNbzbHLzmGN","lptTLFFpdgvttFWltTclplDvhJMSMPhJPhChShPBZBMJhPMT","mPSPdnhznPdhSmPGchJdFDtBhghgFgWpFBQhTBMg","rHNNvbqHHHwZwMGMWtgtQMZQFQ","wRqqRffvvNHwrHqrNqLvCrqvmPnzdsGJsSsSdSsLPVVPnjsn","CzlngWpClJlzRJpDnpmzCndrhBcrhwcsBcLsNcsmLdQQ","qqSjqFGTFbPFSPTVjcBcBsDdQrwBVLrNcc","PtDDtZTvGDvFCMzZlRJCfWfJ","vtQDpvpvVvvcSFrrljZZsVjFrV","RqcTTRddRrlsjZrwrT","zmbdRdMmMgbPDcGhGmnDpcQn","gZqJRZRZdltFVGZQDZwV","MCMSRHCMRHBBVtVCGwDCFGtD","jcHsTMBNSSrBMjmMrcTMpRqpJggllnprqzRPzdlP","mWSWHdmHWZWjBnGs","TvchwtTfcTvhzwVGNtdrbjnnBnsnNr","JTdwghvMzwfdcMVJqPmQFRPpCDJRJFFC","DsHDCrszvvhHsshvsrrsgwdPpdLFgWLpbRpWFfMjWjWF","BVJPJmPmGZVnfbVfMWpdLMWb","cNGtnttqmJHNvNzDPPHN","gpjmMQMrfmMntCSCNmSNCm","vDRqphDhzHSdtqdCNH","LFLLcbJRJLppFQlpMFfF","SnSdvchzZZczndNvwcwnQrGfqrTTfhhTDgRGGLQQ","lVWHWMmWmttsFBMLLqLTRRRqqDBGTf","bsFPbFFssmFjWRmjVFjHbczvpZCwvwZccndpvzpzCP","jzngbHrlHQllcbcTCtHGWtftGCHqWC","JJgmsJRwFqChLGtqGs","SmJmSmDdSPRwSMppJdPPwVvvzNQvjrNMNjMZZrQgZNgQ","PvPlPcZPZFllzNzCDdhhdHjrpHNjHBHB","VmgWtJWrqbQmqGDBdGQjjhBGdG","tmbgggbgnMWnStttgnfnTzrCfPvFnccnPclT","RQQbdSRdpprQSNVqqqfrffjvnjnJnhnVvHhBhVjJtjJz","WGgGgLmLgGZMPDBhDJDHjMBFnD","WPPwPGwlLgZwmWlslCLRNbrsTrfRrNNQqsspBT","dNNpHpchLppdccTNtZZTRRPSSnwPPSbSnhhrhnSJ","qfqsFsqffgQMznJrPznbMrrB","vglfqQCgDgFjglCDCjLZpTHNPHttdcZVVN","FWtDHDStZwrFCDwrgWPFDsWQJZzlMdpZzlNpNjdjjQzNzj","BqnVGVcbTmGfHLGVzvpQpvJvQlflMdJp","ThRRchnHqLTGbFCCCrrSSFhFCs","wJrwdZPnJwqPbJPCnjFZdvHtMvsLsTsDtHsHDDqvpH","RWzNRWjRfgjNMMLvcMcLNt","WGGRQzzRmRmVQSgwrwJjjCbJhnbShJ","cjngcvcwbMwWnbMWjbgvnsjPftsqfthqsBtsJJJJBt","HrGFmDDzpmLTHpDsPfsBNBPfzZNPqN","DDVmDplDrpGSVSTTHGlpLnPwCRnWcvWCdPbbMvcVdW","BVRlBfPBffWswVWQsfwBNNPMFMmmGFZGnWZGtztrzMZMnz","HqSJchHTHbTgHhGhvmRzFmnFtzRF","RJqHTpgDLJDSqLJJPNVjsfPwBVsVLlfN","NDrBlSmrFBlbbJllmtHHwhNNhZztqHVRzQ","CMTCGLcvvtfCdCcCvCnMTMcTzjHwVZVRLjRRjQjRHRwzwjVH","dfGdgGMGPggnvfvgbtDtlSJPDSFJPslJ"]);